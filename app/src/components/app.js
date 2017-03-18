/**
 * Created by out_xu on 17/3/16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router'

import "whatwg-fetch";
import "fetch-ie8/fetch.js";

require('console-polyfill');
require('es6-promise');

import logo from '../images/logo.svg'

import './app.less'
class AppComponent extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <Link to="demo">
                        demo
                    </Link>
                    <Link to="home">
                        home
                    </Link>
                </p>
                {this.props.children}
            </div>
        )
    }
}

export default AppComponent;
