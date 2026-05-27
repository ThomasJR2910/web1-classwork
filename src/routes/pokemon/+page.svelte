<script>
    import Pokemon from "$lib/components/Pokemon.svelte";
    let { data } = $props();
</script>


<section>
    {#each data.pokemon.results as pokemon} 
    <Pokemon url={pokemon.url} />
    {/each}
</section>

<style>
    section {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
    }
</style>