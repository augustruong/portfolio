import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavWrapper from './components/NavWrapper';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import TheProject from './pages/TheProject';

import './css/common.css';
import './css/construction.css';
import './css/keyframes.css';
import './css/site.css';
import './css/style.css';
import './css/template.css';

function App() {
  return (
    <>
      <Router>
        <NavWrapper/>

        <Routes>
          <Route path='/portfolio' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/projects' element={<ProjectPage/>} />

          <Route path='/projects/ochanomizu-dumplings' element={<TheProject index = {0}/>} />
          <Route path='/projects/ramen-school' element={<TheProject index = {1}/>} />
          <Route path='/projects/the-mysc-box' element={<TheProject index = {2}/>} />
          <Route path='/projects/kedamono' element={<TheProject index = {3}/>} />
          <Route path='/projects/calendar' element={<TheProject index = {4}/>} />
          <Route path='/projects/lemonpoly' element={<TheProject index = {5}/>} />          
        </Routes>

        {/* <p className='copyright'>Copyright © 2022 August. All rights reserved.</p> */}
      </Router>
    </>
  );
}

export default App;
