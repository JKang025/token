<script>
	import Button from '../../components/Button.svelte';
	import HeaderInfo from '../../components/HeaderInfo.svelte';
	import { amountStore } from '../signup/stores';
</script>

<main>
	<div>Congratulations!</div>
	<div>The transaction was successful</div>
	<div>${$amountStore.toFixed(2)}</div>
	<div>{new Date().toLocaleDateString('en-US')}</div>
</main>

<!-- <div class="footer">
	<Button isLink onClick={() => generateCode()} title="Generate Code" />
</div> -->

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
