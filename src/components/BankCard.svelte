<script lang="ts">
	export let bankName = 'Bank Name';
	export let accountType = 'Type of Account';
	export let accountNumber = '••••XXXX';

	export let selected: boolean;
</script>

<div class="card" class:selected>
	<div class="top-stripe" />
	<div class="bottom-stripe">
		<div class="bank-name">{bankName}</div>
		<div class="account-type">{accountType}</div>
		<div class="account-number">{accountNumber}</div>
	</div>
</div>

<style>
	.card {
		width: 100%;
		height: 100%;
		background-color: #d9d9d9;
		border-radius: 1.875rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.top-stripe {
		width: 100%;
		height: 4rem;
		border-radius: 1.7rem 1.7rem 0 0;
		background-color: #6e6e6e;
	}
	.bottom-stripe {
		display: flex;
		padding: 1.5rem;
		padding-bottom: 3rem;
		gap: 0.5rem;
		flex-direction: column;
	}
	.bank-name {
		font-size: 1.25rem;
	}
	.account-type {
		color: #6e6e6e;
	}
	.selected {
		border: 3px;
		border-style: solid;
		border-radius: 1.875rem;
		border-color: #2c8152;
	}
</style>
