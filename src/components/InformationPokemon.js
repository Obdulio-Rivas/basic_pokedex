import React from 'react';
import { StatsChart } from './StatsChart';

const pokedexStyle = {
    pokedexContainerColumn:{
        width: '100%',
        display: 'flex',
        maxWidth: '375px',
        minWidth: '375px',
        flexDirection: 'column',
    },
    pokedexContainerRow:{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap'
    },
    pokedexContainerItem:{
        width: '100%',
        display: 'block',
        paddingTop: '0.2em',
        paddingBottom: '0.2em',
        paddingLeft: '1em',
        paddingRight: '1em',
        background: '#C1E9F3',
        borderRadius: '12.5px',
        color: '#122631',
        marginBottom: '0.5em',
        textAlign: 'center',
        borderTop: '4px solid black',
        borderBottom: '4px solid black',
        borderRight: '6px solid black',
        borderLeft: '6px solid black',
        boxShadow: 'inset 4px 4px 0 0 #F3FDFF',
        justifyContent: 'space-between',
        alignItems: 'space-between',
    },
    pokedexInnerContainerItem:{
        width: '100%',
        display: 'block',
        paddingTop: '0.5em',
        paddingBottom: '0.5em',
        paddingLeft: '1em',
        paddingRight: '1em',
        background: '#FFFFFF',
        borderRadius: '12.5px',
        justifyContent: 'space-between',
        alignItems: 'space-between',
        marginBottom: '1em'
    },
    textCenter:{
        width: '100%',
        textAlign: 'center',
        display: 'block'
    },
    pokedexDivider:{
        width: '100%',
        height: '2px',
        margin: '0.5em auto',
        display: 'block',
        background: 'white'
    },
    pokedexText:{
        fontSize: '1.2em',
    },
}

export const InformationPokemon = (props) => {
    
    const {pokemon} = props;

    return (
        <div style={pokedexStyle.pokedexContainerColumn}>
            <div style={pokedexStyle.pokedexContainerRow}>
                <div style={pokedexStyle.pokedexContainerItem}>
                    <div style={pokedexStyle.textCenter}>
                        <b style={pokedexStyle.pokedexText}>Informacion</b>
                    </div>
                    <div style={pokedexStyle.pokedexDivider}></div>
                    <div style={pokedexStyle.pokedexInnerContainerItem}>
                        <StatsChart data={pokemon.stats}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
