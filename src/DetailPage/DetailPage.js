import React, { Component } from 'react'
import request from 'superagent';
import './DetailPage.css'

export default class DetailPage extends Component {
    state = { pokemon: {} }

    componentDidMount = async () => {
        const name = this.props.match.params.myPokemonId;

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`);

        console.log(data)
        const pokemon = data.body.results[0];

        this.setState({ pokemon: pokemon})
    }

    render() {
        const { pokemon } = this.state;

        return (
            <section>
                {
                    pokemon 
                        && <div>
                        <h1>{pokemon.pokemon}</h1>
                        <a href={`${pokemon.pokedex}`}>Pokedex Entry</a>
                        <p>Defense: {pokemon.defense}</p>
                        <p>Attack: {pokemon.attack}</p>
                        <p>Types: {pokemon.type_1}, {pokemon.type_2}</p>
                    </div>
                }
                {
                    pokemon
                        && <div>
                            <img className="detailImage" src={pokemon.url_image} alt={pokemon.pokemon} />
                        </div>
                    
                }
            </section>
        )
    }
}
