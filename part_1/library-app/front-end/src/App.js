import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddBook from './components/AddBook';
import SpecBook from './components/SpecBook';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router>
          <Route path="/library/create_book">
            <AddBook/>
          </Route>
          <Route exact path="/library">

          </Route>
          <Route exact path="/library/:book_id">
            <SpecBook/>
          </Route>
        </Router>
      </div>
    );
  }
}