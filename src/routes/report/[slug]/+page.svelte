<script>
	import X from '../../../components/X.svelte';
	import logo from '$lib/images/Logo.svg';
	export let data;
</script>

<header>
	<div class="back">
		<a href="/home">
			<X />
		</a>
	</div>
</header>
<main>
	<div class="header">
		<div class="customer">{data.transaction.full_name}</div>
		<div class="phone">{data.transaction.phone}</div>
		<div class="amount">${data.transaction.amount.toFixed(2)}</div>
	</div>
	<div class="image">
		<img src={logo} alt="logo" />
	</div>
	<div>
		<div class="gray">Transaction Status</div>
		<div>Complete</div>
	</div>
	<div>
		<div class="gray">Transaction Details</div>
		<div>{new Date(data.transaction.timestamp).toDateString()}</div>
	</div>
	<!-- <div>
		<div class="gray">Received from</div>
		<div>{data.transaction.}</div>
	</div> -->
	<div>
		<div class="gray">Transaction ID</div>
		<div>{data.transaction.track_number}</div>
	</div>
</main>

<style>
	header {
		display: relative;
		width: 100%;
	}
	.back {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1rem;
	}
	main {
		height: 100vh;
		width: 100%;
		padding: 5rem 2rem 5rem 2rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 0.25rem;
	}
	.customer {
		color: #2c8152;
		font-size: 1.25rem;
		font-weight: 600;
	}
	.phone {
		font-size: 0.875rem;
		color: #6e6e6e;
	}
	.amount {
		font-size: 1.25rem;
		font-weight: 600;
	}
	.image {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.gray {
		color: #6e6e6e;
	}
</style>
