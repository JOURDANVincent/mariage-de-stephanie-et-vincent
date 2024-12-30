<script lang="ts">

    let name: string
    let firstname: string
</script>

<section>
    <h2>Tu seras là ?</h2>

    <p>Pour confirmer ta présence à notre mariage, tu as juste à écrire ton nom et ton prénom et les personnes qui t'accompagnent</p>
    <p>En cliquant sur envoyer, ta messagerie préférée s'ouvrira avec les information pré-remplies, tu n'auras plus qu'a evoyer le mail</p>

    <form on:submit|preventDefault>
        <input name=name bind:value={name}/>
        <input name=fistname bind:value={firstname}/>
    </form>

</section>