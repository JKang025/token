<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '../components/Button.svelte';

	function creatAccount() {
		console.log('grah');
		goto('/signup/enterPhone');
	}

	function logIn() {
		goto('/login');
	}
</script>

<svelte:head>
	<title>Token - Cashless Cannabis Payments</title>
</svelte:head>

<div id="big-container">
	<div id="img-wrapper">
		<!-- <img id="photo" src="/photos/photo1.png" alt="slideshow" /> -->
	</div>

	<div id="otherWrapper">
		<div id="text-and-button">
			<p id="main-text">Introducing a cashless way to pay for cannabis</p>
			<div class="buttons">
				<Button isLink onClick={creatAccount} title="Create Account" fill={true} />
			</div>
			<div class="buttons">
				<Button isLink onClick={logIn} title="Login" fill={false} />
			</div>
		</div>
	</div>
</div>

<style>
	:root {
		--color-text: solid black;
	}
	#text-and-button {
		margin-left: 7.5%;
		margin-right: 7.5%;
		width: 85%;
		margin-bottom: 30px;
	}
	#otherWrapper {
		position: absolute;
		background-color: #f8fff6;
		bottom: 0px;
		width: 100%;
	}
	#main-text {
		font-size: 27px;

		color: var(--color-text);
		font-weight: 450;
		justify-content: center;
		display: flex;
		padding: 0px;
		margin-left: 5%;
		margin-right: 5%;
	}
	#img-wrapper {
		width: 100%;
		height: 60%;
		background-image: url('/photos/photo1.png');
		background-size: cover;
		background-position: center center;
		animation: slides 20s linear infinite;
		-webkit-animation: slides 20s linear infinite;
		-moz-animation: slides 20s linear infinite;
		-o-animation: slides 20s linear infinite;
		-ms-animation: slides 20s linear infinite;
	}
	@-webkit-keyframes slides {
		from {
			background: url('/photos/photo1.png');
			background-size: cover;
			background-position: center center;
			opacity: 1;
		}
		18% {
			background: url('/photos/photo1.png');
			background-size: cover;
			background-position: center center;
			opacity: 1;
		}
		20% {
			background: url('/photos/photo1.png');
			background-size: cover;
			background-position: center center;
			opacity: 0;
		}
		22% {
			/* switch to 2 */
			background: url('/photos/photo2.png');
			background-size: cover;
			background-position: center center;
			opacity: 0;
		}
		25% {
			/* fully show 2 */
			background: url('/photos/photo2.png');
			background-size: cover;
			background-position: center center;
			opacity: 1;
		}
		43% {
			background: url('/photos/photo2.png');
			background-size: cover;
			background-position: center center;
			opacity: 1;
		}
		45% {
			background: url('/photos/photo2.png');
			background-size: cover;
			background-position: center center;
			opacity: 0;
		}
		47% {
			/* switch to 3 */
			background: url('/photos/photo3.png');
			background-size: cover;
			background-position: center center;
			opacity: 0;
		}
		50% {
			/* fully show 3 */
			background: url('/photos/photo3.png');
			background-size: cover;
			background-position: center center;
			opacity: 1;
		}
		68% {
			background: url('/photos/photo2.png');
			background-size: cover;
			background-position: center center;
			opacity: 1;
		}
		70% {
			background: url('/photos/photo2.png');
			background-size: cover;
			background-position: center center;
			opacity: 0;
		}
		72% {
			/* switch to 3 */
			background: url('/photos/photo3.png');
			background-size: cover;
			background-position: center center;
			opacity: 0;
		}
		75% {
			/* fully show 3 */
			background: url('/photos/photo3.png');
			background-size: cover;
			background-position: center center;
			opacity: 1;
		}
		93% {
			background: url('/photos/photo3.png');
			background-size: cover;
			background-position: center center;
			opacity: 1;
		}
		95% {
			background: url('/photos/photo3.png');
			background-size: cover;
			background-position: center center;
			opacity: 0;
		}
		97% {
			/* switch to 1 */
			background: url('/photos/photo1.png');
			background-size: cover;
			background-position: center center;
			opacity: 0;
		}
		to {
			background: url('/photos/photo1.png');
			background-size: cover;
			background-position: center center;
			opacity: 1;
		}
	}
	.buttons {
		margin-top: 20px;
	}

	#img-wrapper {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	#photo {
		width: 100%;
		height: 100%;
		height: auto;
		object-fit: contain;
		object-position: center;
	}
	#big-container {
		width: 100%;
		height: 60vh;
		overflow: hidden;
	}
</style>
