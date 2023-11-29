<script lang="ts">
	import { goto } from "$app/navigation";
    import Button from "../../components/Button.svelte";
import HeaderInfo from "../../components/HeaderInfo.svelte";

    function proceed(){
        goto('/confirmlicense')
    }
</script>

<div id="big-container">
    <HeaderInfo showImg={false} backLocation="/uploadid" bar="two" title="Upload your photo"/>
    
    
    <div id="img-wrapper">
        <img src="/photos/greyguy.png">
    </div>

    <div id="sub-text">
        <p>In order for us to verify your identity, the photo must be:<br><br>&nbsp;&bull;Evenly lit<br>&nbsp;&bull;Front-facing<br>&nbsp;&bull;Shoulders up on a blank background</p>
        
 
        
    </div>

    <div id="button-wrapper">
        <Button onClick={proceed} title="Upload Photo"/>
    </div>
</div>

<style>
    #big-container{
        width:100%;
    }

    #img-wrapper, #main-text, #sub-text{
        margin-left: 7.5%;
        margin-right:7.5%;
        width:85%;
    }

    #img-wrapper{
        margin-top: 30%;
    }



    #sub-text{
        color: #6E6E6E;
    }

    #button-wrapper{
        position: absolute;
        bottom:30px;
        width:85%;
        margin-left:7.5%;
        margin-right:7.5%;
    }

</style>