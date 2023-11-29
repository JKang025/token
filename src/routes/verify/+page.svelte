<script lang="ts">
	import { goto } from '$app/navigation';
    import Button from '../../components/Button.svelte';
    import HeaderInfo from '../../components/HeaderInfo.svelte';

    function proceed(){
        goto('/tos')
    }
    
</script>

<div id="big-container">
    
    

    <HeaderInfo showBack={true} backLocation='/signup/enterPassword'/>
    <div id=img-container>
        <img src='photos/person.png' alt="guy"/>
    </div>
    <div id="main-text">
        <p>Verify your identity</p>
    </div>
    <div id="sub-text">
        <p style="margin:0px;">We partner with Persona to verify your identity by correlating your government ID 
            with a photo of yourself.</p>

    </div>
    <div id="button-wrapper">
        <Button onClick={proceed} title= 'View TOS' fill={false}/>
    </div>
    
</div>

<style>
    :root{
        --margin-block-start: 0px;
        --margin-block-end: 0px;
        --color-text: #6E6E6E;
    }
    #button-wrapper{
        
        width: 85%;
        margin-left:7.5%;
        margin-right:7.5%;
        position: absolute;
        bottom: 30px;
    }

    #img-container{
        display: flex;
        justify-content: center;
        margin-top: 100px;
    }
    #big-container{
        width:100%;
    }
    #main-text, #sub-text{
        width:85%;
        margin-left:7.5%;
        margin-right:7.5%;
    }
    #main-text{
        font-size: 27px;
        margin-bottom: 5px;
        margin-block-start: var(--margin-block-start);
        margin-block-end: var(--margin-block-end);
    }
    #subtext{
        color: var(--color-text);
    }

</style>