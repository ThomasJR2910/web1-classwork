<script>
    let { data } = $props();
    console.log(data);
</script>

{#each data.pokemon.results as pokemon} 
<div id={pokemon.name}>
    <h2>{pokemon.name}</h2>
</div>
{/each}