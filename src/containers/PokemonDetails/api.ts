export async function fetchPokemonDetails(pokemonURL: string) {
    const response = await fetch(pokemonURL);
    return await response.json();
}


export async function fetchEffect(url: string) {
    const response = await fetch(url);
    return await response.json();
}
