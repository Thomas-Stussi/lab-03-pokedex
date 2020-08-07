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
                    pokeState.length > 0 && <div className="prevNext">
                        {
                            Number(currentPage) !== 1 
                            && <button className="padMe" onClick={handlePrevClick}>Prev</button>
                        }
                       
                        {
                            Number(currentPage) !== Number(totalPages) &&
                            <button className="padMe" onClick={handleNextClick}>Next</button>
                        }
                        <div className="padMe">
                        {currentPage} of {totalPages}
                        </div>
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
