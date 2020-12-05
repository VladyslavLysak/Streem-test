import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';
import Header from './components/Header';
import Footer from './components/Footer';
import errorPage from './pages/errorPage';

import './App.scss';

const App = () => {
  return (
    <div className='main-container'>
      <div className='container'>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={User}/>
            <Route component={errorPage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
