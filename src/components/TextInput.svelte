<script lang="ts">
	export let placeholder = 'Enter text'; // Default placeholder text
	export let value = ''; // Input's value
	// export let type = 'text';
	export let name = '';
	// export let verification = '';
	let errorMessage = '';

	const handleInput = (event: Event) => {
		const target = event.target as HTMLInputElement; // Type casting
		value = target.value;
	};

	function isValidEmail(email: string) {
		var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		return regex.test(email);
	}
</script>

<div class="text-input-container">
	<input type="text" bind:value on:input={handleInput} {placeholder} {name} required />

	<hr class="thin-line" />
</div>

<style>
	.text-input-container {
		outline: none; /* Removes the outline on focus */
		width: 100%;
		color: #6e6e6e;
	}
	input:focus {
		outline: none;
	}

	input {
		/* Style for the input element */
		border: none; /* Removes the default border */
		font-size: 16px; /* Adjust the font size as needed */
		margin-left: 8px;
		color: #6e6e6e;
		font-weight: 300;
	}

	.thin-line {
		border: none;
		border-top: 1.5px solid #6e6e6e; /* Creates a thin, solid line. You can change the color if you want. */
		margin: 5px 0; /* Adds some space above and below the line. Adjust as needed. */
	}
</style>
