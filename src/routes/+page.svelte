<script> 
    import {HeroSection,AboutSection} from "$components";
    const { data } = $props();
    let {workExperience} = $derived(data);
</script>

<HeroSection/>
<AboutSection {workExperience}/>