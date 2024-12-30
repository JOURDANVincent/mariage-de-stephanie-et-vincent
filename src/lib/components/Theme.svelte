<script lang="ts">

    import Theme1 from "$lib/assets/png/theme_1.png"
    import Theme2 from "$lib/assets/png/theme_2.png"

</script>

<section>

    <h2>Thème du Mariage</h2>

    <p>Le thème princpal du Mariage est</p>
    <h3>Bohème Chic</h3>

    <p>Les couleurs sont</p>
    <h3>Orange & Terrcotta</h3>

    <div class="img-box">
        <img src={Theme1} />
        <img src={Theme2} />   
    </div> 

</section>

<style>
    h3 {
        color: #777;
    }
    img { 
        margin-top: 24px;
        height: auto;
        width: 100%;
        object-fit: contain;
    }
    @media screen and (min-width: 729px){

        img { 
            max-height: 400px;
            width: auto;
        }
    }
</style>