import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleSortClick}>Sort Pokemon By Attack!</button>
            </div>
        )
    }
}
