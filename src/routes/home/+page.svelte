<script lang="ts">
	import BankCard from '../../components/BankCard.svelte';
	import Button from '../../components/Button.svelte';
	import License from '../../components/License.svelte';
</script>

<div>
	<Button fill={true} size={'half'} />
	<Button fill={false} />
	<BankCard selected={false} />
	<BankCard selected={true} />
	<License selected={false} />
	<License selected={true} />
</div>

<style>
	div {
		display: flex;
		padding: 1rem;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
</style>
