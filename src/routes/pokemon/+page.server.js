export async function load({ fetch }) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const pokemon = await res.json();
    return {pokemon};
}