import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokemonItem extends Component {
    render() {
        return (
            <Link to={`/detail/${this.props.poke.pokemon}`}>
                <div className="itemBox">
                <h2>{this.props.poke.pokemon}</h2>
                <img className="imgDisplay" src={this.props.poke.url_image} alt={this.props.poke.pokemon} />
                </div>
            </Link>
        )
    }
}
