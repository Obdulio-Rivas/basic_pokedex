import React from 'react';
import { InformationPokemon } from './InformationPokemon';
import { Pokemon } from './Pokemon';

const pokedexStyle = {
    pokedexContainerBody:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyItem: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
    }
}

export const BodyPokedex = (props) => {

    const {pokemon, methods, isLoading} = props;

    return (
        <div style={pokedexStyle.pokedexContainerBody}>
            <Pokemon pokemon = {pokemon} isLoading = {isLoading} methods = {methods}/>
            <InformationPokemon pokemon = {pokemon}/>
        </div>
    )
}
