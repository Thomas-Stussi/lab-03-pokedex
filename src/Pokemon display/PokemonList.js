import React, { Component } from 'react'
import PokemonItem from './PokemonItem'
//import PokemonItem from './PokemonItem.js'

export default class PokemonList extends Component {
    render() {
        return (
            <div className="pokelist">
                Here Are Your Results!
                {
                    this.props.pokemonArray.map(poke => <PokemonItem poke={poke}/>)
                }
            </div>
        )
    }
}
