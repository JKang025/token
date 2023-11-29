<script>
	export let customer = '';
	export let date = new Date();
	export let amount = 10;
	export let id = -1;
</script>

<div class="card">
	<div class="payment">
		<div class="circle" />
		<div class="details">
			<div class="customer">{customer || 'Anonymous'}</div>
			<div class="date">{date.getMonth() + 1}/{date.getDate()}</div>
		</div>
		<div class="price">${amount.toFixed(2)}</div>
	</div>
	<div class="right">
		<a href={id == -1 ? '#' : `/report/${id}`}>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M11.25 10C11.25 10.2472 11.1767 10.4889 11.0393 10.6945C10.902 10.9 10.7067 11.0602 10.4783 11.1548C10.2499 11.2495 9.9986 11.2742 9.75612 11.226C9.51365 11.1778 9.29092 11.0587 9.1161 10.8839C8.94129 10.7091 8.82224 10.4863 8.774 10.2439C8.72577 10.0014 8.75053 9.75005 8.84514 9.52165C8.93975 9.29324 9.09996 9.09801 9.30552 8.96066C9.51108 8.82331 9.75276 8.75 9.99999 8.75C10.3315 8.75 10.6494 8.8817 10.8839 9.11612C11.1183 9.35054 11.25 9.66848 11.25 10ZM4.68749 8.75C4.44026 8.75 4.19858 8.82331 3.99302 8.96066C3.78746 9.09801 3.62725 9.29324 3.53264 9.52165C3.43803 9.75005 3.41327 10.0014 3.4615 10.2439C3.50974 10.4863 3.62879 10.7091 3.8036 10.8839C3.97842 11.0587 4.20115 11.1778 4.44362 11.226C4.6861 11.2742 4.93743 11.2495 5.16584 11.1548C5.39425 11.0602 5.58947 10.9 5.72682 10.6945C5.86417 10.4889 5.93749 10.2472 5.93749 10C5.93749 9.66848 5.80579 9.35054 5.57137 9.11612C5.33695 8.8817 5.01901 8.75 4.68749 8.75ZM15.3125 8.75C15.0653 8.75 14.8236 8.82331 14.618 8.96066C14.4125 9.09801 14.2522 9.29324 14.1576 9.52165C14.063 9.75005 14.0383 10.0014 14.0865 10.2439C14.1347 10.4863 14.2538 10.7091 14.4286 10.8839C14.6034 11.0587 14.8261 11.1778 15.0686 11.226C15.3111 11.2742 15.5624 11.2495 15.7908 11.1548C16.0192 11.0602 16.2145 10.9 16.3518 10.6945C16.4892 10.4889 16.5625 10.2472 16.5625 10C16.5625 9.66848 16.4308 9.35054 16.1964 9.11612C15.9619 8.8817 15.644 8.75 15.3125 8.75Z"
					fill="black"
				/>
			</svg>
		</a>
	</div>
	<div class="line">
		<svg width="352" height="2" viewBox="0 0 352 2" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 1H351" stroke="#D9D9D9" stroke-linecap="round" />
		</svg>
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin-top: 1rem;
	}
	.payment {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		padding: 1rem 0 1rem 0;
		gap: 1rem;
	}
	.circle {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		/* random gradient */
		background: linear-gradient(45deg, #2c8152 0%, #85ba54 100%);
	}
	.customer {
		font-size: 1.25rem;
	}
	.date {
		font-size: 0.875rem;
		color: #6e6e6e;
	}
	.price {
		margin-left: auto;
		color: black;
		font-size: 0.875rem;
		font-weight: 600;
		padding: 0.25rem;
	}
	.right {
		padding-top: 1rem;
		width: 100%;
	}
	.right svg {
		float: right;
	}
	.line svg {
		stroke-width: 1px;
		width: 100%;
		stroke: #d9d9d9;
	}
</style>
