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
import QuestionContainer from './containers/poll.container'
import Statistics from './components/content/vote/details/statistics'
import QRCodeContainer from './containers/qrcode.container'
import ChangeVote from './components/content/vote/changevote'

const RouterApp = (
  <Router history={hashHistory}>
    <Route path='/' component={AppComponent}>
      {/* config initial router */}
      <Route path='login' component={LoginContainer} />
      <Route path='register' component={RegisterContainer} />
      <Route path='vote' component={VoteContainer} />
      <Route path='poll' component={Poll} />
      <Route path='question'>
        <Route path=':voteId' component={QuestionContainer} />
      </Route>
      <Route path='statistics' component={Statistics} />
      <Route path='raise' component={RaiseContainer} />
      <Route path='personalCenter' component={PersonalContainer} />
      <Route path='qrcode' component={QRCodeContainer} />
      <Route path='changevote' component={ChangeVote} />
    </Route>
  </Router>
)

export default RouterApp
