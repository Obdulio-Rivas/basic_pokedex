const getPokemon = async (idPokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
    const res = await fetch(url);
    const pokemon = res.json();
    return pokemon;
}

export default getPokemon;