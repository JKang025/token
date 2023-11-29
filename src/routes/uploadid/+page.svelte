<script lang="ts">
	import { goto } from "$app/navigation";
    import Button from "../../components/Button.svelte";
    import HeaderInfo from "../../components/HeaderInfo.svelte";

    let fileInput: HTMLInputElement = {} as HTMLInputElement;

    function handleFileChange() {
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
            goto('/uploadphoto');
        }
    }

    function proceed(){
        if(fileInput){
            fileInput.click();
        }
    }
</script>

<div id="big-container">
    <HeaderInfo showImg={false} backLocation="/tos" bar="one" title="Upload your ID"/>

    
    <div id="img-wrapper">
        <img src="/photos/idguy.png">
    </div>

    <div id="sub-text">
        <p>You will need a government issued ID. This includes:<br><br>&nbsp&bull;Passport<br>&nbsp&bull;Driver's License<br>&nbsp&bull;States ID</p>
        
    </div>

    
    <div id="button-wrapper">
        <input type="file" accept="image/*" id="upload" class="hidden" bind:this={fileInput} on:change={handleFileChange}/>
        <Button onClick={proceed} title="Upload ID" />

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
        margin-top: 20%;
    }


    #sub-text{
        color: #6E6E6E;
    }

    #button-wrapper{
        margin-left:7.5%;
        margin-right:7.5%;
        width:85%;
        position: absolute;
        bottom: 0;
        margin-bottom: 30px;
    }

    .hidden{
        display: none !important;
    }


</style>