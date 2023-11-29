<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { goto } from '$app/navigation';
import Button from '../components/Button.svelte';

	function creatAccount(){
		console.log("grah");
		goto('/signup/enterPhone');
	}

	function logIn(){
		goto('/login')
	}

</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div id="big-container">
	<div id="img-wrapper">
		<img id="photo" src = "/photos/photo1.png" alt="slideshow"/>
	</div>

	<div id="otherWrapper">
		<div id="text-and-button">
			<p id ="main-text">Introducing a cashless<br> way to pay for cannabis</p>
			<div class="buttons">
				<Button onClick={creatAccount} title="Create Account" fill={true} />
			</div>
			<div class="buttons">
				<Button onClick={logIn} title="Login" fill={false} />
			</div>
		</div>

	</div>
	
</div>

<style>
	:root{
        --color-text: solid black;
    }
	#text-and-button{
		margin-left: 7.5%;
		margin-right: 7.5%;
		width:85%;
		margin-bottom: 30px;
		
	}
	#otherWrapper{
		position:absolute;
		background-color: #F8FFF6;
		bottom:0px;
		width:100%;

	}
	#main-text{
		font-size:27px;
		margin-left:5%;
		margin-right:5%;
		color: var(--color-text);
		font-weight: 450;
	}

	.buttons{
		margin-top: 20px;
	}

	#img-wrapper{
		width:100%;
		overflow: hidden;
	}
	
	#photo{
		max-width: 100%;
    	height: auto;
	}
	#big-container{
		width:100%;
	}
	
</style>
