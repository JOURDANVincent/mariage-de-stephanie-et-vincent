<script lang="ts">

    import HeaderComponent from "../lib/components/Header.svelte";
    import FooterComponent from "../lib/components/Footer.svelte";

    import PivoineUpRight from "/images/png/pivoine_up_right.png";
    import PivoineLeft from "/images/png/pivoine_left.png";

</script>

<HeaderComponent />

<img id="pivoine-left" src={PivoineLeft} />
<img id="pivoine-up-right" src={PivoineUpRight} />

<main id="app">
    <slot />
</main>

<FooterComponent />

<style>

    #app, main {
        z-index: 10;
        padding-top: 36px;
        padding-bottom: 54px;
        box-sizing: border-box;
    }

    #pivoine-left {
        position: fixed;
        z-index: 0;
        top: 0;
        left: 0;
        bottom: 0;
        height: 100%;
    }  

    #pivoine-up-right {
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        height: 80%;
    }   
    
    @media screen and (max-width: 510px) {
        #pivoine-up-right {
            display: none;
        }
    }

</style>