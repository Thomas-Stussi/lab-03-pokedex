import React, { Component } from 'react'
import SearchInput from './SearchInput.js';
import Sort from './Sort.js';

export default class Params extends Component {
    render() {
        return (
            <div className="params">
                <SearchInput handleSearchClick={this.props.handleSearchClick} handleSearchInput={this.props.handleSearchInput} />
                <Sort handleSortClick={this.props.handleSortClick} />
            </div>
        )
    }
}
