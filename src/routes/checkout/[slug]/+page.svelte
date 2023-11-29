<script lang="ts">
	import getToken from '$lib/getToken.js';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	export let data;
	import { amountStore } from '../../signup/stores.js';
	let { supabase } = data;
	$: ({ supabase } = data);

	const startSession = (token: string) => {
		// @ts-ignore
		const sp = new SwifterPay();
		sp.startSession({
			sessionID: data.slug,
			selector: '#pay',
			env: 'sandbox',
			renderInModal: false,
			// @ts-ignore
			onComplete: async (response) => {
				const res = await fetch('/api/order', {
					method: 'POST',
					body: JSON.stringify({ session_id: data.slug, token }),
					headers: {
						'content-type': 'application/json'
					}
				}).then((res) => res.json());
				// console.log(res);
				// res.order.create_date, res.order.track_number
				const res2 = await fetch('/api/charge_order', {
					method: 'POST',
					body: JSON.stringify({ order_id: res.order.id, token }),
					headers: {
						'content-type': 'application/json'
					}
				}).then((res) => res.json());
				$amountStore = res2.charge.amount / 100; // fees + order total_amount + tip
				await supabase.from('transactions').insert([
					{
						full_name: `Customer ${Math.floor(Math.random() * 10000)}`,
						phone: response.consumer.phone,
						amount: $amountStore,
						track_number: res.order.track_number,
						timestamp: res.order.create_date
					}
				]);
				goto('/success');
			},
			// @ts-ignore
			onExit: (response) => {
				const { code } = response;
				if (code === 'requested_pay_later') {
					console.log('Place order anyway');
				} else if (code === 'init_error') {
					console.log('Initialization error');
				} else if (!code) {
					console.log('Exit without action');
				}
			}
		});
	};

	onMount(async () => {
		const token = await getToken();
		startSession(token);
	});
</script>

<svelte:head>
	<script src="https://js.payswifter.com/v1.js"></script>
	<script type="text/javascript"></script>
</svelte:head>

<main id="pay" />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
		min-height: 100vh;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
	:global(#swifter-pay-iframe) {
		min-height: 100vh;
	}
</style>
