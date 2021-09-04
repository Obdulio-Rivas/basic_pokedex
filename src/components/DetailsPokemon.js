import React from 'react'

export const DetailsPokemon = (props) => {
    
    const {pokemon} = props;
    
    return (
        <>
            <b>Height: {pokemon?.height}m</b>
            <b>Weight: {pokemon?.weight}kg</b>
        </>
    )
}
