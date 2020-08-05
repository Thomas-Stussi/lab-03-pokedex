import React, { Component } from 'react'

export default class PokemonItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.poke.pokemon}</h1>
                <p>Attack: {this.props.poke.attack}  Defense: {this.props.poke.attack}</p>
                <img src={this.props.poke.url_image} alt={this.props.poke.pokemon} />
            </div>
        )
    }
}
