import React, { Component } from 'react';
import './App.css';
import Education from './components/Education';
import Work from './components/Work';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar'
import Skills from './components/Skills';
import WhoAmI from './components/Who-Am-I';
import Experience from './components/Experience';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
		      <div id="colorlib-main">
			      <Hero></Hero>
            <WhoAmI></WhoAmI>
            <Skills></Skills>
            <Education></Education>
            <Experience></Experience>
            <Work></Work>
            <Contact></Contact>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;