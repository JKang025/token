<script lang="ts">
    import { writable } from 'svelte/store';
    import { goto } from '$app/navigation';
    import { phoneStore } from '../stores.js';
    import Button from '../../../components/Button.svelte';
    import TextInput from '../../../components/TextInput.svelte';
    import HeaderInfo from '../../../components/HeaderInfo.svelte';

    let textValue = '';

    let errorMessage = '';



    $: isValid = isphone(textValue);

    const handleSubmit = () => {
        if (!isValid) {
            errorMessage = 'Invalid phone number. Please enter a 10-digit number.';
            return; // Prevent further action if not valid
        }
        phoneStore.set(textValue); // Update the store's value
        goto('/signup/enterName'); // Redirect to password form
    };

    function isphone(phoneNumber : string) {
      var regex = /^\d{10}$/;
      return regex.test(phoneNumber);
    }

</script>



<form id="form" on:submit|preventDefault={handleSubmit}>
    <div id="big-container">
   
        <HeaderInfo title="Enter your phone" subtitle="We will need to verify that it's you!" backLocation='/'/>
        <div id="textinput-wrapper">
            {#if errorMessage}
                <p class="error-message">{errorMessage}</p>
            {/if}
            <TextInput bind:value={textValue} placeholder="Phone Number" verification="phone"/>
        </div>
        
        <div id="button-wrapper">
            <p id="tos">By entering a code you agree to the terms. E-sign Consent & Privacy Notice.</p>
            <Button title="Text me a Code" fill={true} />
        </div>
        

    </div>
</form>

<style>
    
    #textinput-wrapper{
        margin-left:7.5%;
        margin-right:7.5%;
        margin-top: 100px;
        margin-bottom: 350px;
    }

    #button-wrapper{
        position: absolute;
        bottom: 0;
        margin-bottom: 40px;
        margin-left: 5%;
        margin-right: 5%
    }

    #tos{
        font: 2px;
        color: #6E6E6E;
    }

    .error-message {
        color: red;
        font-size: 14px;
    }
    #form{
        width:100%;
        flex: 1 1 auto;
		position: relative;
        height: 100%;
    }
</style>