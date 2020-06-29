import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

import Home from './components/Home'
import Projects from './components/Projects'
import Publications from './components/Publications'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>

        <div className="section">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/projects" component={Projects} />
              <Route path="/publications" component={Publications}/>
              <Home />
            </Switch>
          </div>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
