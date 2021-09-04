import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const pokedexContainerButtons = {
    width: '100%',
    display: 'block',
    textAlign: 'center',
}

export const ButtonsPokedex = (props) => {

    const {methods} = props;

    return (
        <div style={pokedexContainerButtons}> 
            <AiFillCaretLeft
                size={'6em'}
                onClick={()=>{methods.previousPokemon()}}
            />
                                    
            <AiFillCaretRight
                size={'6em'}
                onClick={()=>{methods.nextPokemon()}}
            />
        </div>
    )
}
