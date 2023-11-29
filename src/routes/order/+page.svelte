<script lang="ts">
	import Button from '../../components/Button.svelte';
	import { goto } from '$app/navigation';
	import HeaderInfo from '../../components/HeaderInfo.svelte';
	import getToken from '$lib/getToken';
	import { amountStore } from '../signup/stores';

	async function generateCode() {
		// get access token, then create session
		$amountStore = parseFloat(price);
		const token = await getToken();
		const res = await fetch('/api/session', {
			method: 'POST',
			body: JSON.stringify({
				first_name: 'Test',
				last_name: 'User',
				amount: $amountStore * 100,
				token
			}),
			headers: {
				'content-type': 'application/json'
			}
		}).then((res) => res.json());
		// console.log(res);
		goto(`/qrcode/${res.id}`);
	}

	let price = '0';
	function addDigit(digit: string) {
		if (price == '0') {
			price = digit;
		} else if (price.split('.')[1]?.length != 2) {
			price = price + digit;
		}
	}
</script>

<div class="container">
	<HeaderInfo backLocation="/home" />
	<main>
		<div class="price">${price}</div>
		<div class="calculator">
			<button on:click={() => addDigit('1')}>1</button>
			<button on:click={() => addDigit('2')}>2</button>
			<button on:click={() => addDigit('3')}>3</button>
			<button on:click={() => addDigit('4')}>4</button>
			<button on:click={() => addDigit('5')}>5</button>
			<button on:click={() => addDigit('6')}>6</button>
			<button on:click={() => addDigit('7')}>7</button>
			<button on:click={() => addDigit('8')}>8</button>
			<button on:click={() => addDigit('9')}>9</button>
			<button on:click={() => addDigit('0')}>0</button>
			<button
				on:click={() => {
					if (!price.includes('.')) {
						price = price + '.';
					}
				}}>.</button
			>
			<button
				on:click={() => {
					price = price.slice(0, -1);
					if (price.length == 0) {
						price = '0';
					}
				}}>{'<'}</button
			>
		</div>
	</main>
	<div class="footer">
		<Button isLink onClick={() => generateCode()} title="Generate Code" />
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
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		margin-bottom: 8rem;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 100vh;
		position: relative;
	}
	.calculator {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-gap: 1rem 3rem;
	}
	.price {
		padding: 1rem;
		font-size: 4.5rem;
		font-weight: 500;
	}
	button {
		background-color: #fff;
		border: none;
		border-radius: 0.25rem;
		padding: 1rem;
		font-size: 1.5rem;
	}
	.footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
		padding: 2rem 1.25rem;
	}
</style>
