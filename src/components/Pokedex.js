import React, {useState, useEffect} from 'react'
import capitalizeWord from '../helpers/capitalizeWord';
import getPokemon from '../helpers/getPokemon';
import { HeaderPokedex } from './HeaderPokedex';
import { DividerPokedex } from './DividerPokedex';
import { BodyPokedex } from './BodyPokedex';

const setupPokedex = {
    initialPokemon: {
        id: 1
    },
    limitPokedex: {
        limiteInferior: 1,
        limitSuperior: 151
    }
}

const pokedexStyle = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItem: 'center',
        flexDirection: 'column'
    },
    titlePage:{
        width: '100%',
        textAlign: 'center',
        background: '#D4333A',
        height: '60px',
        display: 'flex',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItem: 'center',
        padding: '0 0.5em',
        marginBottom: '1em',
        borderBottom: '7px solid #B03237'
    },
    pokedexContainer:{
        display: 'flex',
        width: '900px',
        justifyItem: 'center',
        alignItems: 'start',
        flexDirection: 'column',
        margin: '1em auto',
        padding: '1.5em 3em',
        borderTop: '6px solid #B03237',
        borderLeft: '4px solid #B03237',
        borderRight: '4px solid #B03237',
        borderBottom: '8px solid #B03237',
        background: '#D4333A',
        borderRadius: '1em',
    }
}

const Pokedex = () => {

    const [pokemon, setPokemon] = useState({id: setupPokedex.initialPokemon.id});
    const [isLoading, setIsLoading] = useState(false);

    const updatePokemon = (idPokemon) => {
        setIsLoading(true);
        getPokemon(idPokemon).then(newPokemon => {
            newPokemon.weight = newPokemon.weight / 10;
            newPokemon.height = newPokemon.height / 10;
            newPokemon.name = capitalizeWord(newPokemon.name);
            setPokemon(newPokemon);
            setIsLoading(false);
        });
    }

    useEffect(() => {
        updatePokemon(pokemon.id)
    }, [pokemon.id])

    const nextPokemon = () => {

        const {limitSuperior} = setupPokedex.limitPokedex;
        
        if (limitSuperior <= pokemon.id) return null
        
        setPokemon({
            ...pokemon,
            id: pokemon.id + 1
        })
    }

    const previousPokemon = () => {
        
        const {limiteInferior} = setupPokedex.limitPokedex;

        if (limiteInferior >= pokemon.id) return null

        setPokemon({
            ...pokemon,
            id: pokemon.id - 1
        })
    }

    const methods = {
        nextPokemon,
        previousPokemon
    }

    return (

        <div>
            <div style={pokedexStyle.container}>
                <h1 style={pokedexStyle.titlePage}>Kanto Pokedex</h1>
            </div> 
            <div style={pokedexStyle.container}>
                <div style={pokedexStyle.pokedexContainer}>
                    <HeaderPokedex/>
                    <DividerPokedex/>
                    <BodyPokedex pokemon={pokemon} isLoading = {isLoading} methods = {methods}/>
                </div>
            </div>
        </div>
    )
}

export default Pokedex;