import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleSearchClick}>Search Pokemon By Name!</button>
                <input onChange={this.props.handleSearchInput} />
            </div>
        )
    }
}
