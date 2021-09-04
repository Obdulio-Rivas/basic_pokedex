import React from 'react'

const pokedexStyle = {
    pokedexContainerHeader:{
        display: 'flex',
        width: '100%',
        color: 'white',
        marginBottom: '1em',
        alignItems: 'center',
        justifyContent: 'start'
    },
    pokedexContainerLeds:{
        display: 'flex',
        width: 'auto',
        marginRight: '1em'
    },
    pokedexBigLed:{
        content: '',
        width: '4em',
        height: '4em',
        borderRadius: '50%',
        background: 'rgb(255, 246, 246)',
        border: '3px solid rgb(0, 0, 0)'
    },
    pokedexBigLedCorner:{
        display: 'block',
        content: '',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: 'rgb(255, 246, 246)',
        border: '6px solid rgb(245, 241, 230)'
    },
    pokedexBigLedCrystal: {
        display: 'block',
        content: '',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: 'rgb(0, 219, 255)',
        border: '5px solid rgb(14, 14, 14)',
        boxShadow: 'inset -7px -8px 0 0 rgba(0,0,0,0.4)'
    },
    pokedexLedDetail:{
        display: 'block',
        position: 'relative',
        content: '',
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        top: '4px',
        left: '4px',
        background: 'rgba(255, 255, 255, 0.8)',
    },
    pokedexSmallLedDetail:{
        display: 'block',
        position: 'relative',
        content: '',
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        top: '2px',
        left: '2px',
        background: 'rgba(255, 255, 255, 0.8)',
    },
    pokedexSmallLedRed: {
        content: '',
        width: '1.5em',
        height: '1.5em',
        marginRight: '3px',
        borderRadius: '50%',
        background: 'rgb(245, 29, 87)',
        border: '3px solid rgb(0, 0, 0)',
        boxShadow: 'inset -3px -4px 0 0 rgba(0,0,0,0.3)'
    },
    pokedexSmallLedYellow: {
        content: '',
        width: '1.5em',
        height: '1.5em',
        marginRight: '3px',
        borderRadius: '50%',
        background: 'rgb(231, 244, 118)',
        border: '3px solid rgb(0, 0, 0)',
        boxShadow: 'inset -3px -4px 0 0 rgba(0,0,0,0.3)'
    },
    pokedexSmallLedGreen: {
        content: '',
        width: '1.5em',
        height: '1.5em',
        marginRight: '3px',
        borderRadius: '50%',
        background: 'rgb(52, 243, 78)',
        border: '3px solid rgb(0, 0, 0)',
        boxShadow: 'inset -3px -4px 0 0 rgba(0,0,0,0.3)'
    },
    pokedexTitle: {
        fontSize: '3em',
        fontWeight: 'bold',
        color: 'white'
    }
}

export const HeaderPokedex = () => {
    return (
        <div style={pokedexStyle.pokedexContainerHeader}>
            <div style={pokedexStyle.pokedexContainerLeds}>
                <span style={pokedexStyle.pokedexBigLed}>
                    <span style={pokedexStyle.pokedexBigLedCorner}>
                        <span style={pokedexStyle.pokedexBigLedCrystal}>
                            <span style={pokedexStyle.pokedexLedDetail}></span>
                        </span>
                    </span>
                </span>
                <span style={pokedexStyle.pokedexSmallLedRed}>
                    <span style={pokedexStyle.pokedexSmallLedDetail}></span>
                </span>
                <span style={pokedexStyle.pokedexSmallLedYellow}>                            
                    <span style={pokedexStyle.pokedexSmallLedDetail}></span>
                </span>
                <span style={pokedexStyle.pokedexSmallLedGreen}>
                    <span style={pokedexStyle.pokedexSmallLedDetail}></span>
                </span>
            </div>
            <span style={pokedexStyle.pokedexTitle}>Kanto Pokedex</span>
        </div>
    )
}
