import React, { Component } from 'react';
import './App.css';
import About from './components/about';
import Introduction from './components/introduction';
import Sidebar from './components/sidebar';
import TimeLine from './components/timeline';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Introduction></Introduction>
          <About></About>
          <TimeLine></TimeLine>
          <Skills></Skills>
          <Contact></Contact>
          <br />
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;