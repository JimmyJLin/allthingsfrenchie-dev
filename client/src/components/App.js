import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Landing from './landing/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Landing}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
