import React from 'react'

const pokedexStyle = {
    pokedexBodyDivider:{
        width: '90%',
        height: '14px',
        margin: '0.5em 0 1em 0',
        display: 'block',
        background: 'rgb(70, 25, 88)',
        borderBottom: '6px solid rgb(44, 16, 56)',
        borderRadius: '5px'
    },
}

export const DividerPokedex = () => {
    return (
        <div style={pokedexStyle.pokedexBodyDivider}></div>
    )
}
