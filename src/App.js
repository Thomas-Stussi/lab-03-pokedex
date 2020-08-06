import React from 'react';
import './App.css';
import request from 'superagent';
import Header from './Header+Nav/Header.js'
import Params from './SearchSection/Params';
import PokemonList from './Pokemon display/PokemonList';

class App extends React.Component {
  //initialize the state
  state = {
    search: '',
    pokeState: [],
  }

  //add a click handler
  handleSearchClick = async () => {
    //request the data
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&pokemon=${this.state.search}`);
   
    //set the data to the state
    this.setState({pokeState: data.body.results});
  }

  handleSearchInput = (e) => {
    const inputValue = e.target.value;
    this.setState({ search: inputValue })
  }

  // handleSortClick = () => {
  //   console.log('*****HELLO*****');
  //   console.log(this.state);
  //   this.state.pokeState.sort(function (a, b) {
  //     return Number(a.attack) - Number(b.attack);
  //   })
  // }
  

render() {

  return (
    <body>
      <Header />
      <main>
      <Params handleSearchClick={this.handleSearchClick} handleSearchInput={this.handleSearchInput} handleSortClick={this.handleSortClick} />
      <PokemonList pokemonArray={this.state.pokeState} />
      </main>
    </body>
  );
}
 
}

export default App;
