<script lang="ts">
	import Button from '../../components/Button.svelte';
	import TextInput from '../../components/TextInput.svelte';
	import HeaderInfo from '../../components/HeaderInfo.svelte';

	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	let password = '';
	let email = '';

	let loginError = '';

	/*
    function isEmail(email : string) {
        var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    function isPassword(password : string) {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return regex.test(password);
    }
    */
</script>

<div id="big-container">
	<HeaderInfo title="Login to your account" backLocation="/" />

	<form
		method="POST"
		action="?/login"
		use:enhance={({ formElement, formData, action, cancel }) => {
			return async ({ result }) => {
				// `result` is an `ActionResult` object
				console.log(result.type);
				if (result.type === 'redirect') {
					goto(result.location);
				} else {
					loginError = 'Invalid Credentials';
					goto('/');
				}
			};
		}}
	>
		<div id="email-wrapper" class="center">
			<TextInput bind:value={email} name="email" placeholder="Email" verification="email" />
		</div>

		<div id="password-wrapper" class="center">
			<TextInput
				bind:value={password}
				name="password"
				placeholder="Password"
				verification="password"
			/>
		</div>

		<div id="button-wrapper">
			<Button isLink title="Next" fill={true} />
		</div>

		{#if loginError}
			<p class="error-message">{loginError}</p>
		{/if}
	</form>
</div>

<style>
	#email-wrapper {
		margin-top: 100px;
		margin-bottom: 30px;
	}
	.center {
		margin-left: 7.5%;
		margin-right: 7.5%;
	}
	#button-wrapper {
		margin-left: 5%;
		margin-right: 5%;
		width: 90%;
		position: absolute;
		bottom: 0;
		margin-bottom: 40px;
	}
	#password-wrapper {
		margin-bottom: 350px;
	}
	.error-message {
		color: red;
		font-size: 14px;
	}
	#big-container {
		width: 100%;
	}
</style>
