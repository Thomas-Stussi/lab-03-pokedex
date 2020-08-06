import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    
} from 'react-router-dom';
import SearchPage from './SearchSection/SearchPage.js';
import DetailPage from './DetailPage/DetailPage.js';
import './App.css';
import Header from './Header+Nav/Header.js';

export default class App extends Component {
    render() {
        return (
          <>
          <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                        <Route 
                            path="/detail/:myPokemonId" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
            </>
        )
    }
}