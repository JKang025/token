<script lang="ts">
	import { goto } from '$app/navigation';
    import Button from '../../components/Button.svelte';
    import HeaderInfo from '../../components/HeaderInfo.svelte';

    function proceed(){
        goto('/uploadid')
    }
    
</script>

<div id="big-container">
    <HeaderInfo showImg={false} backLocation='/verify'/>
    <div id="main-text">
        <p>Persona Terms of Service</p>
    </div>
    <div id="sub-text">
        <p>These Persona Terms of Use (this “Agreement”) is entered into by and between Persona Identities, Inc. (“Persona”) and the entity or person placing an order for or accessing the Persona Services (“Customer” or “you”). This Agreement consists of the terms and conditions set forth below, any exhibits or addenda identified below and any Order Forms. If you are accessing or using the Persona Services on behalf of your company, you represent that you are authorized to accept this Agreement on behalf of your company, and all references to “you” or “Customer” reference your company. <br><br>
            Please note that Persona may modify the terms and conditions of this Agreement in accordance with Section 13.8 (Amendments; Waivers).
            <br><br>BY INDICATING YOUR ACCEPTANCE OF THIS AGREEMENT OR ACCESSING OR USING THE PERSONA SERVICES, YOU ARE FULLY AGREEING WITH OUR TERMS AND SERVICES. </p>
    </div>
    <div id="button-wrapper">
        <Button onClick={proceed} title="Agree to TOS" />
    </div>
</div>

<style>
    :root{
        --color-text: #6E6E6E;
    }
   
    #big-container{
        width:100%;
        
        
    }

    #button-wrapper{
        width:85%;
        margin-left:7.5%;
        margin-right:7.5%;
        position: absolute;
        bottom: 30px;
    }

    #main-text, #sub-text{
        margin-left:7.5%;
        width:85%;
        margin-right:7.5%;
    }

    #main-text{
        font-size: 27px;
        color: black;
    }

    #sub-text{
        color: var(--color-text);
    }
</style>