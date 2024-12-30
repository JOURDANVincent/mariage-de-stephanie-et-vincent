<script lang="ts">

    import Us from "$lib/assets/jpeg/us.jpg";
    
</script>

<section>

    <img src={Us} alt="Nous" />

    <h2>Notre mariage !</h2>

    <h3>Nous allons nous marier !</h3>

    <p>Nous sommes sur un petit nuage et nous souhaitons partager tout ce bonheur avec toi. C’est pour ça que nous préparons un mariage de rêve qui marquera les esprits de tous et au cours duquel tu t'amuseras comme un fou.</p>
    <p>En attendant le grand jour, nous avons créé ce site composé de diverses sections afin de te tenir au courant de l’avancée du mariage et partager notre histoire.</p>
    <p>Un détail important, dans la section Présence tu peux confirmer ou non ta venue. Communique-le nous au plus vite afin que l’on puisse s’organiser plus facilement.</p>
        
    <h3>Bonne lecture et à très bientôt !</h3>

</section>


<style>
    section {
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;
    }
    img {
        width: 100%;
        object-fit: contain;
        /* filter: grayscale(100%); */
        border-radius: 2px;
        filter: sepia(100%);
        opacity: 0.8
    }
    h3 {
        color: #444;
        font-size: 1.2em;
    }
</style>