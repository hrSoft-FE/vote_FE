import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import AppComponent from "./components/app";
// components React
import Home from './components/content/home';
import Vote from './components/content/vote';
import PersonalContainer from './containers/personalcenter.container';
import LoginContainer from './containers/login.container';
import RegisterContainer from './containers/register.container';
import Poll from './components/content/poll';
import Raise from './components/content/raise';
import Question from './components/content/question';
import Statistics from './components/content/vote/details/statistics';

const RouterApp = (
    <Router history={hashHistory}>
        <Route path="/" component={AppComponent}>
            {/*config initial router*/}
            <IndexRoute component={Home}/>
            <Route path="login" component={LoginContainer}/>
            <Route path="register" component={RegisterContainer}/>
            <Route path="home" component={Home}/>
            <Route path="vote" component={Vote}/>
            <Route path="poll" component={Poll}/>
            <Route path="question" component={Question}/>
            <Route path="statistics" component={Statistics}/>
            <Route path="raise" component={Raise}/>
            <Route path="personalCenter" component={PersonalContainer}/>
        </Route>
    </Router>
);

export default RouterApp;