import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";


import AppComponent from "./components/app";
import DemoContainer from './containers/demo.container';

const RouterApp = (
    <Router history={hashHistory}>
        <Route path="/" component={AppComponent}>
            {/*<IndexRoute component={}/>*/}
            <Route path="demo" component={DemoContainer} />
        </Route>

    </Router>
);

export default RouterApp;