<script>
	import { onMount } from 'svelte';

	export let codeValue = '';
	export let squareSize = 300;

	let qrcode;

	onMount(() => {
		let script = document.createElement('script');
		script.src = 'https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js';
		document.head.append(script);

		script.onload = function () {
			// @ts-ignore
			qrcode = new QRCode('qrcode', {
				text: codeValue,
				width: squareSize,
				height: squareSize,
				colorDark: '#000000',
				colorLight: '#ffffff',
				// @ts-ignore
				correctLevel: QRCode.CorrectLevel.H
			});
		};
	});
</script>

<div id="qrcode" />

<style>
	#qrcode {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
</style>
