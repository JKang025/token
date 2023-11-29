<script lang="ts">
	import { goto } from "$app/navigation";
    import Button from "../../../components/Button.svelte";
    import HeaderInfo from "../../../components/HeaderInfo.svelte";

    function proceed(){
        goto('/bank/zipcode')
    }
</script>

<div id="big-container">
    <HeaderInfo  backLocation="/confirmlicense"/>
    
    
    <div id="img-wrapper">
        <img src="/photos/bank.png">
    </div>
    <div id="main-text">
        <p>Link your bank</p>
    </div>

    <div id="sub-text">
        <p>We keep your information secure so your business is protected.</p>
        
 
        
    </div>

    <div id="button-wrapper">
        <Button onClick={proceed} title="Get Started"/>
    </div>
</div>

<style>
    #big-container{
        width:100%;
    }

     #main-text, #sub-text{
        margin-left: 7.5%;
        margin-right:7.5%;
        width:85%;
    }

    #img-wrapper{
        margin-top:10%;
        width: 100%;
    }

    #main-text{
        font-size:27px;
        color:black;
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