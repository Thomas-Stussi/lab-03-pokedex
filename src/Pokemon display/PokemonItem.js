import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokemonItem extends Component {
    render() {
        return (
            <Link to={`/detail/${this.props.poke.pokemon}`}>
                <h1>{this.props.poke.pokemon}</h1>
                <p>Attack: {this.props.poke.attack}  Defense: {this.props.poke.attack}</p>
                <img src={this.props.poke.url_image} alt={this.props.poke.pokemon} />
            </Link>
        )
    }
}
