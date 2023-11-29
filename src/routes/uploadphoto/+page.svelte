<script lang="ts">
	import { goto } from "$app/navigation";
    import Button from "../../components/Button.svelte";
    import HeaderInfo from "../../components/HeaderInfo.svelte";

    let fileInput: HTMLInputElement = {} as HTMLInputElement;


    function proceed(){
        if(fileInput){
            fileInput.click();
        }
        
    }
    function handleFileChange() {
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
            goto('/confirmlicense')
        }
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
    <input type="file" accept="image/*" id="upload" class="hidden" bind:this={fileInput} on:change={handleFileChange}/>

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
        margin-top: 20%;
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

    .hidden{
        display: none !important;
    }

</style>