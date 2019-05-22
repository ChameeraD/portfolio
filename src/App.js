import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Skills from './components/skills'
import Contact from './components/contact'
//import Projects from './components/projects'
class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
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