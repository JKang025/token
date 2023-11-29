<script>
    import { nameStore } from '../stores.js';
    import Button from '../../../components/Button.svelte';
    import TextInput from '../../../components/TextInput.svelte';
    import HeaderInfo from '../../../components/HeaderInfo.svelte';
    import { goto } from '$app/navigation';


    let firstValue = '';  
    let lastValue = '';
    
    const handleSubmit = () => {
        $nameStore = [firstValue, lastValue]
        goto('/signup/enterPassword'); // Redirect to password form
    };

    
</script>

<form id="form" on:submit|preventDefault={handleSubmit}>
    <HeaderInfo title="Enter your details" subtitle="You’ll never have to do this again."/>
    
    <div id="big-container">
   
        <div id="first-wrapper" class="center">
            <TextInput bind:value={firstValue} name="first-name" placeholder="First Name"/>
        </div>
        
        <div id="last-wrapper" class="center">
            <TextInput bind:value={lastValue} name="last-name" placeholder="Last Name"/>
        </div>
        
        <div id="button-wrapper">
            <Button title="Next" fill={true} />
        </div>
</form>
        



<style>
    #first-wrapper{
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
    #last-wrapper{
        margin-bottom: 350px;;
    }
    #form{
        width:100%;
    }
</style>

