<script>
    import { phoneStore, nameStore} from '../stores.js';
    import Button from '../../../components/Button.svelte';
    import TextInput from '../../../components/TextInput.svelte';
    import HeaderInfo from '../../../components/HeaderInfo.svelte';
    let password = '';

    let phoneValue = $phoneStore;
    let nameValue = $nameStore;
    

    
</script>

<div id="big-container">
   
    <HeaderInfo title="Set up your login" subtitle="Pay cashless. Everytime."/>
    
    <form  method = "POST" action="?/register">
        <div id="email-wrapper" class="center">
            <TextInput name = "email" placeholder="Email"/>
        </div>
        
        <div id="password-wrapper" class="center">
            <TextInput name = "password" placeholder="Password"/>
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
</style>

