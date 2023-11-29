<script lang="ts">
	export let title = 'Button';
	export let fill = true;
	export let size = 'full';
	export let href: string | undefined = undefined;
	export let isLink = false;
	export let disabled = false;
	export let onClick: () => void = () => {};
</script>

{#if href || isLink}
	<a {href} class:size={size == 'full'}
		><button class:fill class:size={size == 'full'} on:click={onClick} {disabled}>{title}</button
		></a
	>
{:else}
	<button class:fill class:size={size == 'full'} on:click={onClick} {disabled}>{title}</button>
{/if}

<style>
	button {
		background-color: transparent;
		border: 2px;
		border-style: solid;
		border-radius: 1.875rem;
		border-color: #2c8152;
		color: #2c8152;
		font-size: 1.25rem;
		padding: 0.75rem;
		text-align: center;
		font-weight: 600;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		width: 50%;
		max-width: 40rem;
	}
	a button {
		cursor: pointer;
	}
	a {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.fill {
		background-color: #2c8152;
		border: 0px;
		color: white;
	}
	.size {
		width: 100%;
	}
	a {
		color: #2c8152;
		cursor: pointer;
		width: 50%;
	}
	a .fill {
		color: white;
	}
</style>
