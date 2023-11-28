<script lang="ts">
	export let title = ''; 
    export let subtitle = ''; 

  
    
</script>

<div class="big-container">
    <div class="img-container">
        <img src = "/photos/Logo.png">
    </div>
   <p id="maintext">{title}</p>
   <p id="subtext">{subtitle}</p>
</div>

<style>
    :root{
        --color-text: solid black;
    }

    .big-container{
        width: 100%;
        
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
    margin-top: 30px;
    margin-bottom: 30px;
}

</style>
