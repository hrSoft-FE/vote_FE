import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";


import AppComponent from "./components/app";
// components React
import Home from './components/content/home';
import Vote from './components/content/vote';
import PersonalCenter from './components/content/personalcenter';

const RouterApp = (
    <Router history={hashHistory}>
        <Route path="/" component={AppComponent}>
            {/*config initial router*/}
            <IndexRoute component={Home}/>
            <Route path="home" component={Home} />
            <Route path="vote" component={Vote} />
            <Route path="personalCenter" component={PersonalCenter} />
        </Route>

    </Router>
);

export default RouterApp;