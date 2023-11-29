<script lang="ts">
	import Add from '../../components/Add.svelte';
	import Back from '../../components/Back.svelte';
	import BankCard from '../../components/BankCard.svelte';
	import Button from '../../components/Button.svelte';
	import Delete from '../../components/Delete.svelte';
	import HeaderInfo from '../../components/HeaderInfo.svelte';
	import License from '../../components/License.svelte';
	import X from '../../components/X.svelte';
</script>

<div>
	<HeaderInfo title="Title" subtitle="Subtitle" />
	<Add />
	<Delete />
	<Back />
	<Back title={'Home'} />
	<X />
	<Button fill={true} size={'half'} />
	<Button fill={false} />
	<Button href="/storybook" />
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
