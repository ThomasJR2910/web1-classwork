<script>
    import { onMount } from "svelte";

    let { url } = $props();
    let pokemon;

    async function getPokemon(url) {
        const res = await fetch(url);
        return await res.json();
    }

    let pokePromise = getPokemon(url);
</script>

{#await pokePromise}
    <p>fetching...</p>
{:then pokemon} 
<div>
    <h2>{pokemon.name}</h2>
    <img src={pokemon.sprites.front_default} alt={pokemon.name}>
</div>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}