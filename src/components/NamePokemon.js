import React from 'react'

const namePokemonStyle = {
    width: '100%',
    textAlign: 'center',
    display: 'block',
    fontWeight: 'bold',
    fontSize: '2em'
}

export const NamePokemon = (props) => {

    const {pokemon} = props;

    return (
        <span style={namePokemonStyle}>#{pokemon.id} {pokemon?.name}</span>
    )
}
