<section>

    <h2>La journée</h2>

    <div class=agenda>

        <div class="item">
            <div class="hour">16h00</div>
            <h3 class=title>Cérémonie</h3>
            <p class="desc">Voici le moment tant attendu ! Nous avons le plaisir de tous vous retrouver pour célébrer notre union. </p>
        </div>

        <div class="item">
            <div class="hour">18h00</div>
            <h3 class=title>Cocktail</h3>
            <p class="desc">Voici le moment tant attendu ! Nous avons le plaisir de tous vous retrouver pour célébrer notre union. </p>
        </div>

        <div class="item">
            <div class="hour">20h00</div>
            <h3 class=title>Dîner</h3>
            <p class="desc">Voici le moment tant attendu ! Nous avons le plaisir de tous vous retrouver pour célébrer notre union. </p>
        </div>

        <div class="item">
            <div class="hour">23h00</div>
            <h3 class=title>Fiesta</h3>
            <p class="desc">Voici le moment tant attendu ! Nous avons le plaisir de tous vous retrouver pour célébrer notre union. </p>
        </div>

    </div>

</section>

<style>
    .agenda {
        max-width: 500px;
        margin-inline: auto;
        text-align: left;
        /* padding-top: 24px; */
    }
    .item {
        display: grid;
        /* grid-template-columns: 200px, 1fr; */
        grid-template-areas: 
            "hour title"
            "hour desc";
        padding-bottom: 12px;
        margin-bottom: 12px;
        /* border-bottom: 1px solid #ccc; */
    }
    .hour {
        grid-area: hour;
        font-weight: bold;
        font-family: shadows;
        font-size: 1.6em;
        color: #cd9061;
        width: 100px;
    }
    h3 {
        grid-area: title;
        font-size: 1.1em;
        color: #777;
        /* font-family: simonetta; */
        font-weight: bold;
        margin-bottom: 6px;
    }
    .desc {
        grid-area: desc;
    }
</style>