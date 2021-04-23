import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import ServicesPage from './components/Pages/ServicesPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import TeamPage from './components/Pages/TeamPage';

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
         <Route
          exact={true}
          path="/"
          component={Home}
         />

        <Route
        path ="/about"
        component={About}
        />
        
        <Route
        path ="/contact"
        component={Contact}
        />  
         <Route
        path ="/services"
        component={ServicesPage}
        />  
        <Route
        path ="/portfolio"
        component={PortfolioPage}
        />  
        <Route
        path ="/team"
        component={TeamPage}
        />  
        </PageWrapper>
      </Router>
      
    );
  }
}

export default App;
