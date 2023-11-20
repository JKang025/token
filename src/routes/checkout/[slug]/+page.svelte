<script>
	import { onMount } from 'svelte';
	export let data;

	const startSession = () => {
		// @ts-ignore
		const sp = new SwifterPay();
		sp.startSession({
			sessionID: data.slug,
			selector: '#pay',
			env: 'sandbox',
			renderInModal: false,
			// @ts-ignore
			onComplete: async (response) => {
				console.log('Session completed successsfully');
				console.log(response);
				const res = await fetch('/api/order', {
					method: 'POST',
					body: JSON.stringify({ session_id: data.slug }),
					headers: {
						'content-type': 'application/json'
					}
				}).then((res) => res.json());
				console.log(res);
				// then, show success page
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

	onMount(() => {
		startSession();
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
