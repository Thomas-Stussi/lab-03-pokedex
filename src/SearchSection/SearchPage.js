import React from 'react';
import '../App.css';
import request from 'superagent';
import Params from './Params';
import PokemonList from '../PokemonDisplay/PokemonList';

class SearchPage extends React.Component {
  //initialize the state
  state = {
    search: '',
    searchBy: 'pokemon',
    pokeState: [],
    currentPage: 1,
    totalPages: 1
  }

  componentDidMount = async () => {
    const params = new URLSearchParams(this.props.location.search);

    const searchBy = params.get('searchBy');
    const page = params.get('page');
    const search = params.get('search');

    if (searchBy && page && search) {
      await this.setState({
        searchBy: searchBy,
        currentPage: page,
        search: search
      });
    }

    await this.makeRequest()
  }

  makeRequest = async () => {
    this.setState({ isLoading: true });
    
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchBy}=${this.state.search}`);

    await this.setState({ 
      pokeState: data.body.results,
      totalPages: Math.ceil(data.body.count / 20),
      isLoading: false,
     })

     const params = new URLSearchParams(this.props.location.search);

     params.set('search', this.state.search);
     params.set('searchBy', this.state.searchBy);
     params.set('page', this.state.currentPage);


     this.props.history.push('?' + params.toString())
  }

  handleNextClick = async () => {
    await this.setState({ currentPage: Number(this.state.currentPage) + 1 })

    await this.makeRequest();
  }

  handlePrevClick = async () => {
    await this.setState({ currentPage: Number(this.state.currentPage) - 1 })

    await this.makeRequest();
  }

  //add a click handler
  handleSearchClick = async () => {
    await this.setState({
      currentPage: 1
    })
    await this.makeRequest()
  }

  handleSearchInput = (e) => {
    const inputValue = e.target.value;
    this.setState({ search: inputValue })
  }

  handleSelectChange = (e) => {
      this.setState({ searchBy: e.target.value });
  }

render() {
  const { 
    pokeState, 
    currentPage,
    totalPages,
  } = this.state;

  return (
    <body>
      <main>
      <Params handleSearchClick={this.handleSearchClick} handleSearchInput={this.handleSearchInput} handleSortClick={this.handleSortClick} handleSelectChange={this.handleSelectChange} search={this.state.search} searchBy={this.state.searchBy} />
      <PokemonList pokemonArray={this.state.pokeState}  handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick} 
                currentPage={currentPage}
                pokeState={pokeState}
                totalPages={totalPages}/>
      </main>
    </body>
  );
}
}
export default SearchPage;
