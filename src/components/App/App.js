import React, { Component } from 'react';
import FeelingForm from '../FeelingForm/FeelingForm'
import ContentForm from '../ContentForm/ContentForm'
import SupportForm from '../SupportForm/SupportForm'
import CommentForm from '../CommentForm/CommentForm'
import Successful from '../Successful/Successful'
import ReviewAnswers from '../ReviewAnswers/ReviewAnswers'
import Admin from '../Admin/Admin'



import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' component={FeelingForm} />
          <Route path='/2' component={ContentForm} />
          <Route path='/3' component={SupportForm} />
          <Route path='/4' component={CommentForm} />
          <Route path='/submit' component={ReviewAnswers} />
          <Route path='/5' component={Successful} />
          <Route path='/admin' component={Admin} />
        </Router>
        <br/>
      </div>
    );
  }
}

export default connect()(App);
