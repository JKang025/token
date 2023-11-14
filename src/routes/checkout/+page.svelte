<script>
	const startSession = () => {
		// @ts-ignore
		const sp = new SwifterPay();
		sp.startSession({
			sessionID: 'insert session here',
			selector: 'body',
			renderInModal: true,
			// @ts-ignore
			onComplete: (response) => {
				console.log('Session completed successsfully');
			},
			// @ts-ignore
			onExit: (response) => {
				const { code } = response;
				if (code === 'requested_pay_later') {
					console.log('Place order anyway');
				} else if (code === 'init_error') {
					console.log('Initialization error');
				} else if (!code) {
					console.log('Exit without action');
				}
			}
		});
	};
</script>

<svelte:head>
	<script src="https://js.payswifter.com/v1.js"></script>
	<script type="text/javascript"></script>
</svelte:head>

<button id="start" on:click={startSession}>Pay Now</button>
