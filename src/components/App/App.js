import React, { Component } from 'react';
import axios from 'axios';
import FeelingForm from '../FeelingForm/FeelingForm'
import ContentForm from '../ContentForm/ContentForm'
import SupportForm from '../SupportForm/SupportForm'
import CommentForm from '../CommentForm/CommentForm'

import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <Route exact path='/' component={FeelingForm} />
          <Route path='/2' component={ContentForm} />
          <Route path='/3' component={SupportForm} />
          <Route path='/4' component={CommentForm} />
          <Route path='/submit' component={FeelingForm} />
        </Router>
        <br/>
      </div>
    );
  }
}

export default connect()(App);
