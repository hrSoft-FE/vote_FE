import React from 'react'
import {Router, Route, hashHistory} from 'react-router'

import AppComponent from './components/app'
// components React
import PersonalContainer from './containers/personalcenter.container'
import VoteContainer from './containers/vote.container'
import LoginContainer from './containers/login.container'
import RegisterContainer from './containers/register.container'
import Poll from './components/content/poll'
import RaiseContainer from './containers/raise.container'
import ReviseContainer from './containers/revise.container'
import QuestionContainer from './containers/poll.container'
import Statistics from './components/content/vote/statistics'
import QRCodeContainer from './containers/qrcode.container'

const RouterApp = (
  <Router history={hashHistory}>
    <Route path='/' component={AppComponent}>
      {/* config initial router */}
      <Route path='login' component={LoginContainer} />
      <Route path='register' component={RegisterContainer} />
      <Route path='vote' component={VoteContainer} />
      <Route path='raise' component={RaiseContainer} />
      <Route path='revise' component={ReviseContainer} />
      <Route path='poll' component={Poll} />
      <Route path='question'>
        <Route path=':voteId' component={QuestionContainer} />
      </Route>
      <Route path='statistics' component={Statistics} />
      <Route path='personalCenter' component={PersonalContainer} />
      <Route path='qrcode' component={QRCodeContainer} />

    </Route>
  </Router>
)

export default RouterApp
