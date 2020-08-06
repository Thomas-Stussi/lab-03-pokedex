import React, { Component } from 'react'
import Nav from './Nav.js'

export default class Header extends Component {
    render() {
        return (
            <header>
                <h3>Gotta Catch 'Em All!</h3>
                <Nav />
            </header>
        )
    }
}
