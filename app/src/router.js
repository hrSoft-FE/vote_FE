import React from "react";
import {Router, Route, hashHistory} from "react-router";

import AppComponent from "./components/app";
// components React
import Vote from './components/content/vote';
import PersonalContainer from './containers/personalcenter.container';
import LoginContainer from './containers/login.container';
import RegisterContainer from './containers/register.container';
import Poll from './components/content/poll';
import RaiseContainer from './containers/raise.container';
import QuestionContainer from './containers/poll.container';
import Statistics from './components/content/vote/details/statistics';
import QRCode from './components/content/qrcode';

const RouterApp = (
    <Router history={hashHistory}>
        <Route path="/" component={AppComponent}>
            {/*config initial router*/}
            <Route path="login" component={LoginContainer}/>
            <Route path="register" component={RegisterContainer}/>
            <Route path="vote" component={Vote}/>
            <Route path="poll" component={Poll}/>
            <Route path="question" component={QuestionContainer}/>
            <Route path="statistics" component={Statistics}/>
            <Route path="raise" component={RaiseContainer}/>
            <Route path="personalCenter" component={PersonalContainer}/>
            <Route path="qrcode" component={QRCode}/>
        </Route>
    </Router>
);

export default RouterApp;