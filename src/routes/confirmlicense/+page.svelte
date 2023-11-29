<script lang="ts">
	import { goto } from "$app/navigation";
    import Button from "../../components/Button.svelte";
import HeaderInfo from "../../components/HeaderInfo.svelte";

    function proceed(){
        goto('/bank/bankstart')
    }
</script>

<div id="big-container">
    <HeaderInfo showImg={false} backLocation="/uploadphoto" bar="three" title="Verify your license"/>

    
    <div id="img-wrapper">
        <img src="/photos/license.png" id="img">
    </div>


    <div id="button-wrapper">
        <Button onClick={proceed} title="Next"/>
    </div>
</div>

<style>
    #big-container{
        width:100%;
    }



    #img-wrapper{
        margin-left:2.5%;
        margin-right:2.5%;
        margin-top:30%;
    }

 

 

    #button-wrapper{
        position: absolute;
        bottom:30px;
        width:85%;
        margin-left:7.5%;
        margin-right:7.5%;
    }

 

</style>