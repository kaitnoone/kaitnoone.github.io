import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Hero />}></Route>
                <Route path="/about-me" element={<WhoAmI />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/education" element={<Education />}></Route>
                <Route path="/experience" element={<Experience />}></Route>
                <Route path="/work" element={<Work />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;