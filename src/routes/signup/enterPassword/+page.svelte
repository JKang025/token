<script lang="ts">
    import { phoneStore, nameStore} from '../stores.js';
    import Button from '../../../components/Button.svelte';
    import TextInput from '../../../components/TextInput.svelte';
    import HeaderInfo from '../../../components/HeaderInfo.svelte';

    import { enhance } from '$app/forms';

    let password = '';
    let email = '';

    let phoneValue = $phoneStore;
    let nameValue = $nameStore;

    let passwordError = '';
    let emailError = '';

    function isEmail(email : string) {
        var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    function isPassword(password : string) {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return regex.test(password);
    }
    




    
</script>

<div id="big-container">
   
    <HeaderInfo title="Set up your login" subtitle="Pay cashless. Everytime."/>
    
    <form method="POST" action="?/register"
        use:enhance={({ cancel }) => {
            if (!isEmail(email)){
                emailError = "Please enter a valid email";
                cancel();
            } 
            if(!isPassword(password)){
                passwordError = "Please enter a password that is at least 6 characters long, uppercase letter, lowercase letter, number, special character";
                cancel();
            }
        }}>
        <div id="email-wrapper" class="center">
            {#if emailError}
                <p class="error-message">{emailError}</p>
            {/if}
            <TextInput bind:value={email} name = "email" placeholder="Email" verification="email"/>
        </div>
        
        <div id="password-wrapper" class="center">
            {#if passwordError}
                <p class="error-message">{passwordError}</p>
            {/if}
            <TextInput bind:value={password} name = "password" placeholder="Password" verification="password"/>
        </div>
        
        <div id="button-wrapper">
            <Button title= "Next" fill={true} />
        </div>
        

        <input type="hidden" name="phone" value= {phoneValue}>
        <input type="hidden" name="firstName" value= {nameValue[0]}>
        <input type="hidden" name="lastName" value= {nameValue[1]}>
    </form>

</div>

<style>
    #email-wrapper{
        margin-top: 100px;
        margin-bottom: 30px;
    }
    .center{
        margin-left:7.5%;
        margin-right:7.5%;
    }
    #button-wrapper{
        margin-left:5%;
        margin-right:5%;
        width:90%;
        position: absolute;
        bottom: 0;
        margin-bottom: 40px;
    }
    #password-wrapper{
        margin-bottom: 350px;;
    }
    .error-message {
        color: red;
        font-size: 14px;
    }
</style>

