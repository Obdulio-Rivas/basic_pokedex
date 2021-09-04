import React from 'react';

const pokedexStyle = {
    imgPokemon: {
        display: 'block',
        maxWidth: '80%',
        margin: 'auto',
    },
}

export const ImagePokemon = (props) => {

    const {pokemon, isLoading} = props;

    const srcImage = isLoading ? 'pokemonIcon.png': pokemon?.sprites?.other['official-artwork']?.front_default;

    return (
        <img
            src={srcImage}
            alt={pokemon?.name}
            style={pokedexStyle.imgPokemon}
        />
    )
}
