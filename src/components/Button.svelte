<script lang="ts">
	export let title = 'Button';
	export let fill = true;
	export let size = 'full';
</script>

<button class:fill class:size={size == 'full'}>{title}</button>

<style>
	button {
		background-color: transparent;
		border: 2px;
		border-style: solid;
		border-radius: 1.875rem;
		border-color: #2c8152;
		color: #2c8152;
		font-size: 1.25rem;
		padding: 0.75rem 4rem;
		text-align: center;
		font-weight: 600;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		width:100%;
	}
	.fill {
		background-color: #2c8152;
		border: 0px;
		color: white;
	}
	.size {
		padding: 0.75rem 8rem;
	}
</style>
