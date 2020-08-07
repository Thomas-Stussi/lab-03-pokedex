import React, { Component } from 'react'
import PokemonItem from './PokemonItem.js'


export default class PokemonList extends Component {
    render() {
        const { 
            pokeState, 
            handleNextClick, 
            handlePrevClick,
            currentPage,
            totalPages
         } = this.props;
         
        return (
            <div>
                {
                    pokeState.length > 0 && <div>
                        {
                            Number(currentPage) !== 1 
                            && <button onClick={handlePrevClick}>Prev</button>
                        }
                       
                        {
                            Number(currentPage) !== Number(totalPages) &&
                            <button onClick={handleNextClick}>Next</button>
                        }
                        {currentPage} of {totalPages}

                        </div>
                }
                <div className="pokelist">
                
                    {
                        this.props.pokemonArray.map(poke => <PokemonItem poke={poke}/>)
                    }
                </div>
            </div>
        )
    }
}
