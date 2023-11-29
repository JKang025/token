<script lang="ts">
    import HeaderInfo from "../../../components/HeaderInfo.svelte";
    import Button from "../../../components/Button.svelte";
    import TextInput from "../../../components/TextInput.svelte";

    import { zipStore } from '../myStores';
	import { goto } from "$app/navigation";

    let zipcode = ''

    function handleSubmit(){
        $zipStore = zipcode;
        goto('linkbank');
    }
</script>

<div id="big-container">
    <HeaderInfo showImg={false} showBack={true} bar="one" title="Enter your zipcode" backLocation="/bank/bankstart"/>
    
    <form id="form" on:submit|preventDefault={handleSubmit}>
        <div id="zip-wrapper" class="center">
            <TextInput bind:value={zipcode} name="first-name" placeholder="Zipcode"/>
        </div>

        <div id="button-wrapper">
            <Button title="Next"/>
        </div>
    </form>

    
</div>

<style>
    #big-container{
        width:100%;
    }
    #button-wrapper{
        width:85%;
        margin-left: 7.5%;
        margin-right:7.5%;
        position: absolute;
        bottom:30px;
    }

    #zip-wrapper{
        margin-left: 7.5%;
        margin-right: 7.5%;
        width:85%;
        margin-top:30%;
    }
</style>
