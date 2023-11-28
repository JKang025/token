<script>
    import { writable } from 'svelte/store';
    import { goto } from '$app/navigation';
    import { phoneStore } from '../stores.js';
    import Button from '../../../components/Button.svelte';
    import TextInput from '../../../components/TextInput.svelte';
    import HeaderInfo from '../../../components/HeaderInfo.svelte';

    let phone = '';

    let textValue = '';

    const handleSubmit = () => {
        phoneStore.set(textValue); // Update the store's value
        goto('/signup/enterName'); // Redirect to password form
    };

</script>



<form on:submit|preventDefault={handleSubmit}>
    <div id="big-container">
   
        <HeaderInfo title="Enter your phone" subtitle="We will need to verify that it's you!"/>
        <div id="textinput-wrapper">
            <TextInput bind:value={textValue} placeholder="Phone Number" />
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
</style>