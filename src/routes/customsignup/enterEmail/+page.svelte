<script>
    import { writable } from 'svelte/store';
    import { goto } from '$app/navigation';
    import { myStore } from '../stores.js';

    let email = '';

    const handleSubmit = () => {
        myStore.set(email); // Update the store's value
        console.log(email);
        goto('/customsignup/enterPassword'); // Redirect to password form
    };

</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={email} placeholder="Enter your email" />
    <button type="submit">Submit</button>
</form>