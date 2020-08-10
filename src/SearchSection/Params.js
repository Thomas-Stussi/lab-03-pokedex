import React, { Component } from 'react'

export default class Params extends Component {
    render() {
        return (
            <div className="params">
                <input onChange={this.props.handleSearchInput} value={this.props.search} />
                <p>Search Pokemon By...</p>
                <select onChange={this.props.handleSelectChange} value={this.props.searchBy}>
                    <option value='pokemon'>name</option>
                    <option value='type'>type</option>
                    <option value='attack'>attack</option>
                    <option value='defense'>defense</option>
                </select>
                <button onClick={this.props.handleSearchClick}>See Your Pokemon!</button>
            </div>
        )
    }
}
