<script lang="ts">
    import HeaderInfo from "../../../components/HeaderInfo.svelte";
    import Button from "../../../components/Button.svelte";
    import TextInput from "../../../components/TextInput.svelte";

    import { bankStore } from '../myStores'
	import { goto } from "$app/navigation";

    let firstValue = '';
    let lastValue = '';

    function handleSubmit(){
        $bankStore = [firstValue, lastValue] as any;
        goto('/bank/final');
    }

</script>

<div id="big-container">
    <HeaderInfo showImg={false} showBack={true} bar="two" title="Link your bank" subtitle="We keep this private and secure." backLocation="/bank/zipcode"/>

    <form id="form" on:submit|preventDefault={handleSubmit}>
        
        <div id="big-container">
       
            <div id="first-wrapper" class="center">
                <TextInput bind:value={firstValue} name="first-name" placeholder="Account Value"/>
            </div>
            
            <div id="last-wrapper" class="center">
                <TextInput bind:value={lastValue} name="last-name" placeholder="Routing Number"/>
            </div>
            
            <div id="button-wrapper">
                <Button title="Next" fill={true} />
            </div>
    </form>
</div>


        



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
    #big-container{
        width:100%;
    }
</style>

