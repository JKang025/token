<script lang="ts">
	import logo from '$lib/images/Logo.svg';
	export let storeName = 'Med Men';
	export let ownerName = 'Beard Sahagun';
	export let phoneNumber = '(323) 952-2350';
	export let address = '735 S Broadway, Los Angeles, CA 90014';
	export let licenseNumber = 25197221963;
	export let selected: boolean;
</script>

<div class="card" class:selected>
	<div class="logo">
		<img src={logo} alt="icon" />
	</div>
	<div class="business">
		<div class="store-name">{storeName}</div>
		<div class="gray">{address}</div>
		<div class="license-number">#{licenseNumber}</div>
	</div>
	<div class="small gray">Owner Name</div>
	<div class="name small">{ownerName}</div>
	<div class="small gray">Phone Number</div>
	<div class="phone small">{phoneNumber}</div>
</div>

<style>
	.card {
		background-color: #d9d9d9;
		border-radius: 1.875rem;
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: 0.5rem 1rem;
		justify-content: space-between;
		padding: 2rem;
	}
	/* circular crop */
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	img {
		border-radius: 50%;
		width: 100%;
		object-fit: cover;
	}
	.store-name {
		font-size: 1.25rem;
		font-weight: 500;
	}
	.gray {
		color: #6e6e6e;
	}
	.license-number {
		font-size: 0.75rem;
		color: #2c8152;
		padding: 0.5rem 0 0.5rem 0;
	}
	.small {
		font-size: 0.875rem;
	}
	.selected {
		border: 3px;
		border-style: solid;
		border-radius: 1.875rem;
		border-color: #2c8152;
	}
</style>
