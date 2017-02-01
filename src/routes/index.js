import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './../components/App'
import LoginPage from './../components/auth/LoginPage'
import GoToQuestionare from './../components/auth/GoToQuestionare'
import QuestionPage2 from './../components/auth/QuestionPage2'
import QuestionPage3 from './../components/auth/QuestionPage3'
import LoginSentPage from './../components/auth/LoginSentPage'

const EmptyPage = () => <div></div>

export const routes = (
  <Route component={App}>
    <Route path="/empty" component={EmptyPage}/>
    <Route path="/loginSent" component={LoginSentPage}/>
    <Route path="/questionare" component={GoToQuestionare}/>
    <Route path="/questionPage2" component={QuestionPage2}/>
    <Route path="/questionPage3" component={QuestionPage3}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/" component={LoginPage}>
      <IndexRoute component={App}/>
    </Route>
  </Route>
)
