import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import AppComponent from "./components/app";
// components React
import Home from './components/content/home';
import Vote from './components/content/vote';
import PersonalCenter from './components/content/personalcenter';
import Login from './components/users/login';
import Register from './components/users/register';
import Poll from './components/content/poll';
import Raise from './components/content/raise';
import Question from './components/content/question';
import Statistics from './components/content/vote/details/statistics';

const RouterApp = (
    <Router history={hashHistory}>
        <Route path="/" component={AppComponent}>
            {/*config initial router*/}
            <IndexRoute component={Home}/>
            <Route path="login" component={Login}/>
            <Route path="register" component={Register}/>
            <Route path="home" component={Home} />
            <Route path="vote" component={Vote} />
            <Route path="poll" component={Poll} />
            <Route path="question" component={Question} />
            <Route path="statistics" component={Statistics} />
            <Route path="raise" component={Raise} />
            <Route path="personalCenter" component={PersonalCenter} />
        </Route>
    </Router>
);

export default RouterApp;