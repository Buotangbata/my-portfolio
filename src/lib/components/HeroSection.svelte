<script lang="ts">
    import { goto } from "$app/navigation";
    import {Button} from "$components";
    function onclick(){
        console.log("Cliccare");
        goto("/#contact-form");
    }
</script>
<section class="hero-section default-margin">
    <h3>Salve! Mi chiamo Antonio!</h3>
    <div class="underscore"></div>
    <h1>Sono un sviluppatore di Ernst & Young</h1>
    <h1 class="dark-grey mb-m">Su Questo Sito.</h1>
    <Button {onclick}>Parliamo</Button>
</section>

<style>
    .hero-section{
        padding-top: 60px;
    }
</style>