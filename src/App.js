import React, { Component } from 'react';
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom';

import HomePage from './HomePage';
import TaiwanPage from './TaiwanPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <header>
            <nav className="bg-secondary">
              <div className="container grid-lg">
                <Link className="logo" to="/">id card helper</Link>
                <ul>
                  <li><Link to="/taiwan">身份證助手</Link></li>
                </ul>
              </div>
            </nav>
          </header>
          <Route exact path="/" component={HomePage} />
          <Route path="/taiwan" component={TaiwanPage} />
          <footer className="bg-gray">
            <div className="container grid-lg">
              <p><a href="https://github.com/sexyoung/id-card-helper" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://paypal.me/sexyoung" target="_blank" rel="noopener noreferrer">PayPal Donate</a> | Version <span className="version" /></p>
              <p>Designed and built with ♥ by <a href="https://twitter.com/sexyoung1985" target="_blank" rel="noopener noreferrer">Sexyoung</a>. Licensed under the <a href="https://github.com/sexyoung/id-card-helper/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT License</a>.</p>
            </div>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;