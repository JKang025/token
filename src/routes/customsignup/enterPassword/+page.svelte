<script>
    import { myStore } from '../stores.js';

    let password = '';

    let emailValue = $myStore;
    

    
</script>

<form  method = "POST" action="?/register">
    <input type="password" name = "password" placeholder="Password" required>
    <input type="hidden" name="email" value= {emailValue}>
    <button type="submit">Register</button>
  </form>