import React from 'react';
import './App.css';

import './Shared/FontAwesomeIcon/FontAwesome';

import MainPage from './Hero/MainPage';
import { Switch, Route } from 'react-router-dom';
import About from './About/About';
import Contactme from './Contactme/Contactme';
import Project from './Projects/Project';
import Footer from './Footer/Footer';
import Navigations from './Shared/Navigation/Navigations/Navigations';

function App() {
  return (
    <>
      <Navigations />

      <Switch>
        <Route path='/v1/contactme'>
          <Contactme />
        </Route>
        {/* <Route path='/v1/projects'>
          <Project />
        </Route> */}

        <Route path='/:url?' exact>
          <MainPage />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
