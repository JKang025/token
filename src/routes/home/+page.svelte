<script>
	import MiniLogo from '../../components/MiniLogo.svelte';
	import Button from '../../components/Button.svelte';
	import PaymentInfo from '../../components/PaymentInfo.svelte';
	export let shop = 'Med Men';
</script>

<header>
	<div class="logo">
		<MiniLogo />
	</div>
	<h1>Welcome, {shop}!</h1>
</header>
<main>
	<PaymentInfo />
	<PaymentInfo />
	<PaymentInfo />
</main>
<div class="footer">
	<Button href="/qrcode/1" title="Create New Order" />
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
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		margin-top: 2rem;
		margin-bottom: auto;
	}
	.footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
		padding: 2rem 1.25rem;
	}
</style>
