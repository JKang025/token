<script>
	import QRCode from './QRJS.svelte';
	import Button from '../../../components/Button.svelte';
	import X from '../../../components/X.svelte';
	import { amountStore } from '../../signup/stores';
	export let data;
</script>

<header>
	<h1>Med Men</h1>
	<div class="back">
		<a href="/home">
			<X />
		</a>
	</div>
</header>
<main>
	<h3>Present Code</h3>
	<div id="qrcode-container">
		<QRCode codeValue={data.slug ? `${data.url}/checkout/${data.slug}` : ''} squareSize={300} />
	</div>
	<div class="price">${$amountStore.toFixed(2)}</div>
	<div class="date">{new Date().toLocaleDateString('en-US')}</div>
</main>
<div class="footer">
	<Button fill={true} title="Scan Complete" />
</div>

<style>
	header {
		display: relative;
		width: 100%;
		padding: 1rem;
	}
	h1 {
		color: #2c8152;
		font-size: 1.25rem;
		font-weight: 600;
	}
	.back {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1rem;
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 1rem;
	}
	h3 {
		color: black;
		font-size: 2rem;
	}
	.price {
		padding: 1rem;
		color: black;
		font-size: 1.25rem;
		font-weight: 600;
	}
	.date {
		padding: 1rem;
		color: #6e6e6e;
	}
	.footer {
		width: 100%;
		box-sizing: border-box;
		padding: 2rem 1.25rem;
	}
</style>
