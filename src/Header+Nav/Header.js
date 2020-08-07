import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Gotta Catch 'Em All</h1>
                <li>
                    <Link to="/detail">Detail</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </header>
        )
    }
}
