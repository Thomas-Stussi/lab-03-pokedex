import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.handleSearchInput} />
                <button onClick={this.props.handleSearchClick}>Search Pokemon By Name!</button>
            </div>
        )
    }
}
