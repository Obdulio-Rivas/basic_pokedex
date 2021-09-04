import React from 'react';
import { ButtonsPokedex } from './ButtonsPokedex';
import { DetailsPokemon } from './DetailsPokemon';
import { ImagePokemon } from './ImagePokemon';
import { NamePokemon } from './NamePokemon';

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
    pokedexContainerItemFlex:{
        width: '100%',
        display: 'flex',
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
    }
}

export const Pokemon = (props) => {

    const {pokemon, methods, isLoading} = props;

    return (
        <div style={pokedexStyle.pokedexContainerColumn}>
            <div style={pokedexStyle.pokedexContainerRow}>
                <div style={pokedexStyle.pokedexContainerItem}>
                    <NamePokemon pokemon={pokemon}/>
                </div>
            </div>
            <div style={pokedexStyle.pokedexContainerRow}>
                <div style={pokedexStyle.pokedexContainerItemFlex}>
                    <ImagePokemon pokemon={pokemon} isLoading={isLoading}/>
                </div>
            </div>
            <div style={pokedexStyle.pokedexContainerRow}>
                <div style={pokedexStyle.pokedexContainerItemFlex}>
                    <DetailsPokemon pokemon={pokemon}/>
                </div>
            </div>
            <div style={pokedexStyle.pokedexContainerRow}>
                <ButtonsPokedex methods={methods}/>
            </div>
        </div>
    )
}
