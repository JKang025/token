<script>
	import MiniLogo from '../../components/MiniLogo.svelte';
	import Button from '../../components/Button.svelte';
	import PaymentInfo from '../../components/PaymentInfo.svelte';
	import { goto } from '$app/navigation';

	function createOrder() {
		goto('/order');
	}

	export let data;
</script>

<svelte:head>
	<title>Token - Home</title>
</svelte:head>

<div class="container">
	<header>
		<div class="logo">
			<MiniLogo />
		</div>
		<h1>Welcome{data.profile?.full_name ? `, ${data.profile?.full_name}` : ''}!</h1>
	</header>
	<main>
		{#if !data.transactions || data.transactions.length === 0}
			<p>No transactions yet</p>
		{:else}
			{#each data.transactions as transaction}
				<PaymentInfo
					id={transaction.id}
					customer={transaction.full_name}
					amount={transaction.amount}
					date={new Date(transaction.timestamp)}
				/>
			{/each}
		{/if}
	</main>
	<div class="footer">
		<Button isLink onClick={() => createOrder()} title="Create New Order" />
	</div>
</div>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 2.5rem 0 1rem 0;
		border: 1px solid #d9d9d9;
		box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.08);
	}
	h1 {
		font-size: 1.25rem;
		font-weight: 600;
	}
	main {
		display: flex;
		height: 60%;
		flex-direction: column;
		align-items: center;
		padding: 0 1rem 0 1rem;
		padding-bottom: 2rem;
		box-sizing: border-box;
		margin-bottom: auto;
		overflow: scroll;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 100vh;
		position: relative;
	}
	.footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
		padding: 2rem 1.25rem;
	}
</style>
