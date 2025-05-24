<script lang="ts">
    import SectionHeader from "./SectionHeader.svelte";
    import Button from "./Button.svelte";
    import image from "$assets/profile_pic.png";
    import { goto } from "$app/navigation";

    function onclick(){
        goto("/#contact-form");
    }
</script>

<section class="about-section">
    <SectionHeader sectionName={'about-me'}>About Me</SectionHeader>
    <div class="mt-m content-container default-margin">
        <img class="image" src={image} alt=""/>
        <div class="text">
            <p>Ciao! Mi chiamo Antonio. Sono nato e cresciuto a Roma, una città ricca di storia e cultura. Fin da piccolo ho sempre avuto una grande passione per la musica e l'arte, che mi hanno accompagnato durante tutto il mio percorso di vita.</p>
            <p>Attualmente lavoro come insegnante di musica in una scuola secondaria. Amo condividere la mia passione con gli studenti e aiutarli a scoprire il loro talento musicale. Nel tempo libero, mi dedico alla pittura e spesso partecipo a mostre locali per esporre le mie opere.</p>
            <p>Sono una persona socievole e curiosa. Mi piace viaggiare e conoscere nuove culture, poiché credo che ogni esperienza arricchisca il nostro bagaglio personale. Spero di poter continuare a crescere sia personalmente che professionalmente, affrontando nuove sfide con entusiasmo.</p>
            <Button className="mt-m" {onclick} >Parlami del tuo progetto</Button>
        </div>
    </div>
   
</section>

<style>
    .about-section{
        padding-top: 60px;
    }

    .content-container {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }

    .image {
        width: 42%;
        border-radius: 20px;
        object-fit: cover;
    }

    .text {
        width: 55%;
        text-align: left;
    }
</style>