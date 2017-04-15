import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import AppComponent from "./components/app";
// components React
import Vote from './components/content/vote';
import PersonalContainer from './containers/personalcenter.container';
import LoginContainer from './containers/login.container';
import RegisterContainer from './containers/register.container';
import Poll from './components/content/poll';
import RaiseContainer from './containers/raise.container';
import Question from './components/content/question';
import Statistics from './components/content/vote/details/statistics';
import Revise from './components/content/vote/revise';

const RouterApp = (
    <Router history={hashHistory}>
        <Route path="/" component={AppComponent}>
            {/*config initial router*/}
            <Route path="login" component={LoginContainer}/>
            <Route path="register" component={RegisterContainer}/>
            <Route path="vote" component={Vote}/>
            <Route path="poll" component={Poll}/>
            <Route path="question" component={Question}/>
            <Route path="statistics" component={Statistics}/>
            <Route path="revise" component={Revise}/>
            <Route path="raise" component={RaiseContainer}/>
            <Route path="personalCenter" component={PersonalContainer}/>
        </Route>
    </Router>
);

export default RouterApp;