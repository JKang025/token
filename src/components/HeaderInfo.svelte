<script lang="ts">
	import Back from '../components/Back.svelte';
	export let title = '';
	export let subtitle = '';
	export let showBack = true;
	export let showImg = true;
	export let backLocation = '';
	export let underline = false;
</script>

<div class="big-container" class:underline>
	{#if showBack}
		<div id="back-button">
			<Back link={backLocation} />
		</div>
	{/if}
	{#if showImg}
		<div class="img-container">
			<img src="/photos/Logo.png" alt="logo" />
		</div>
	{/if}

	<p id="maintext">{title}</p>
	<p id="subtext">{subtitle}</p>
</div>

<style>
	:root {
		--color-text: solid black;
	}

	.big-container {
		width: 100%;
	}
	.underline {
		border: 1px solid #d9d9d9;
		box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.08);
	}

	.img-container {
		display: flex;
		justify-content: center;
	}

	#maintext {
		margin-left: 7.5%;
		margin-right: 7.5%;
		color: var(--color-text);
		font-size: 27px;
		margin-bottom: 0;
		margin-top: 0;
	}

	#subtext {
		margin-left: 7.5%;
		margin-right: 7.5%;
		color: #6e6e6e;
		margin-top: 0;
	}

	img {
		margin-top: 0px;
		margin-bottom: 30px;
	}

	#back-button {
		margin-left: 7.5%;
		margin-top: 30px;
		margin-bottom: 0px;
	}
</style>
