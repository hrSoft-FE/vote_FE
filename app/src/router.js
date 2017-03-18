import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";


import AppComponent from "./components/app";
import DemoContainer from './containers/demo.container';
// components React
import Home from './components/content/home';

const RouterApp = (
    <Router history={hashHistory}>
        <Route path="/" component={AppComponent}>
            {/*<IndexRoute component={}/>*/}
            <Route path="demo" component={DemoContainer} />
            <Route path="home" component={Home} />
        </Route>

    </Router>
);

export default RouterApp;