import React from 'react';
import '../App.css';
import request from 'superagent';
import Params from './Params';
import PokemonList from '../Pokemon display/PokemonList';

class SearchPage extends React.Component {
  //initialize the state
  state = {
    search: '',
    searchBy: 'pokemon',
    pokeState: [],
  }

  //add a click handler
  handleSearchClick = async () => {
    //request the data
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&${this.state.searchBy}=${this.state.search}`);
   
    //set the data to the state
    this.setState({pokeState: data.body.results});
  }

  handleSearchInput = (e) => {
    const inputValue = e.target.value;
    this.setState({ search: inputValue })
  }

  handleSelectChange = (e) => {
      this.setState({ searchBy: e.target.value });
  }

render() {

  return (
    <body>
      <main>
      <Params handleSearchClick={this.handleSearchClick} handleSearchInput={this.handleSearchInput} handleSortClick={this.handleSortClick} handleSelectChange={this.handleSelectChange}  />
      <PokemonList pokemonArray={this.state.pokeState} />
      </main>
    </body>
  );
}
 
}

export default SearchPage;
