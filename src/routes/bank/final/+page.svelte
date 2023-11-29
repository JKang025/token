<script lang="ts">
    import { zipStore, bankStore} from '../myStores';
    import Button from '../../../components/Button.svelte';
    import HeaderInfo from '../../../components/HeaderInfo.svelte';

    import { enhance } from '$app/forms';
</script>

<div id="big-container">
    <HeaderInfo showBack={true} bar="three" showImg={false} backLocation="/bank/linkbank" title="All done" subtitle="We will inform you when your account is verified. Press submit to return to homepage."/>
    <form method="POST" action="?/submit">
        <input type="hidden" name="zipcode" value={$zipStore}>
        <input type="hidden" name="account-number" value= {$bankStore[0]}>
        <input type="hidden" name="routing-number" value= {$bankStore[1]}>
        <div id="button-wrapper">
            <Button title = "Submit"/>
        </div>
        
    </form>
</div>

<style>
    #button-wrapper{
        width:85%;
        margin-left:7.5%;
        margin-right:7.5%;
        position:absolute;
        bottom:30px;
    }
    #big-container{
        width:100%;
    }
</style>

