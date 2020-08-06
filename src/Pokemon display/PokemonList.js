import React, { Component } from 'react'
import PokemonItem from './PokemonItem'
//import PokemonItem from './PokemonItem.js'

export default class PokemonList extends Component {
    render() {
        return (
            <div>
                Here Are Your Results!
                {
                    this.props.pokemonArray.map(poke => <PokemonItem poke={poke}/>)
                }
            </div>
        )
    }
}
