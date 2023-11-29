<script lang="ts">
	import Back from '../components/Back.svelte';
	export let title = '';
	export let subtitle = '';
	export let showBack = true;
	export let showImg = true;
	export let backLocation = '';
	export let underline = false;
    export let bar = '';
</script>


    

  
    

<div class="big-container" class:underline>
    {#if bar == 'one'}
        <div class="bar">
            <div class="small-bar" style="width: 28.5%; background-color: #3FBA77;"></div>
            <div class="small-bar" style="width: 28.5%; background-color: #D9D9D9;"></div>
            <div class="small-bar" style="width: 28.5%; background-color: #D9D9D9;"></div> 
        </div>
    {/if}
    {#if bar == 'two'}
        <div class="bar">
            <div class="small-bar" style="width: 28.5%; background-color: #3FBA77;"></div>
            <div class="small-bar" style="width: 28.5%; background-color: #3FBA77;"></div>
            <div class="small-bar" style="width: 28.5%; background-color: #D9D9D9;"></div> 
        </div>
    {/if}
    {#if bar == 'three'}
        <div class="bar">
            <div class="small-bar" style="width: 28.5%; background-color: #3FBA77;"></div>
            <div class="small-bar" style="width: 28.5%; background-color: #3FBA77;"></div>
            <div class="small-bar" style="width: 28.5%; background-color: #3FBA77;"></div> 
        </div>
    {/if}
    {#if showBack}
        <div id="back-button">
            <Back link={backLocation}/>
        </div>
    {/if}
    {#if showImg}
        <div class="img-container">
            <img src = "/photos/Logo.png" alt="logo">
        </div>
    {/if}
    
   <p id="maintext">{title}</p>
   <p id="subtext">{subtitle}</p>
</div>

<style>
	:root {
		--color-text: solid black;
	}

	.big-container {
		width: 100%;
        margin-top: 20px;
	}
	.underline {
		border: 1px solid #d9d9d9;
		box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.08);
	}


	.img-container {
		display: flex;
		justify-content: center;
	}

    #maintext{
        margin-left: 7.5%;
        margin-right: 7.5%;
        color: var(--color-text);
        font-size: 27px;
        margin-bottom: 0;
        margin-top: 0;
    }

    #subtext{
        margin-left: 7.5%;
        margin-right: 7.5%;
        color: #6E6E6E;
        margin-top:0;
    }

    img{
        margin-top: 0px;
        margin-bottom: 30px;
    }

    #back-button{
        margin-left: 7.5%;
        margin-top:4%;
        margin-bottom: 2%;
    }

    .bar{
        margin-left: 7.5%;
        margin-right: 7.5%;
        width:85%;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }

    .small-bar{
        height: 3px;
        border-radius: 1px;
    }

</style>
