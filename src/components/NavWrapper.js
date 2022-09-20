import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import { Modal } from './Modal';
import ProjectVisual from './ProjectVisual';

export default function NavWrapper(props) {
    const [showNav,setShowNav] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [pjName, setPjName] = useState("");

    return (
      <header id='nav-wrapper'>
        <NavLink to='/' className='logo'>
          <img src={logo} className='logo-svg'/>
        </NavLink>
  
        <div id='menu-btn' className={showNav ? 'check' : ''} onClick={() => setShowNav(!showNav)}>
          <span className='line line1'></span>
          <span className='line line2'></span>
          <span className='line line3'></span>
        </div>

        <div id='contact-btn' onClick={() => setShowModal(!showModal)}>
          <img src={process.env.PUBLIC_URL + `/assets-icon/contact-btn.png`}/>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
  
        <nav className={`nav ${showNav ? "active" : ""} ${pjName ? "hover-within" : ""}`} >
          <ul className='nav__list main'>
            <li className='nav__list__item'>
              <NavLink className='nav__item' 
                  to='/'
                  style={{'--hover-bg-color': 'var(--yellow-color)'}}
                  onClick={() => setShowNav(false)}
                >
                    <div className='nav__item__transform-wrapper'
                      style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                  >
                    <h4 className='nav__item__title project-title'>Home</h4>
                  </div>
              </NavLink>
            </li>
            <li className='nav__list__item'>
              <NavLink className='nav__item' 
                  to='/about'
                  style={{'--hover-bg-color': 'var(--yellow-color)'}}
                  onClick={() => setShowNav(false)}
                >
                    <div className='nav__item__transform-wrapper'
                      style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                  >
                    <h4 className='nav__item__title project-title'>About Me</h4>
                  </div>
                </NavLink>
            </li>
            <li className='nav__list__item'>
              <NavLink className='nav__item' 
                  to='/projects'
                  style={{'--hover-bg-color': 'var(--yellow-color)'}}
                  onClick={() => setShowNav(false)}
                >
                    <div className='nav__item__transform-wrapper'
                      style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                  >
                    <h4 className='nav__item__title project-title'>My Projects</h4>
                  </div>
                </NavLink>
            </li>
          </ul>
          
          <ul className='nav__list'>
            <li className='nav__list__item'>
              <NavLink className='nav__item projects' 
                 to='/projects/ochanomizu-dumplings'
                 style={{'--hover-bg-color': '#B0723F'}}
                 onClick={() => setShowNav(false)}
                 onMouseEnter = {() => setPjName("ochanomizu-dumplings")}
                 onMouseLeave = {() => setPjName("")}
              >
                <div className='nav__item__transform-wrapper'
                     style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                >
                  <h5 className='nav__item__title project-title'>Ochanomizu Dumplings</h5>
                  <div className='nav__item__category body-text'>landing page, illustration</div>
                </div>
              </NavLink>
            </li>
            <li className='nav__list__item'>
              <NavLink className='nav__item projects' 
                 to='/projects/ramen-school'
                 style={{'--hover-bg-color': '#F0D12D'}}
                 onClick={() => setShowNav(false)}
                 onMouseEnter = {() => setPjName("ramen-school")}
                 onMouseLeave = {() => setPjName("")}
              >
                <div className='nav__item__transform-wrapper'
                     style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                >
                  <h5 className='nav__item__title project-title'>Yamato Online Ramen School</h5>
                  <div className='nav__item__category body-text'>landing page, illustration</div>
                </div>
              </NavLink>
            </li>
            <li className='nav__list__item'>
              <NavLink className='nav__item projects' 
                 to='/projects/the-mysc-box'
                 style={{'--hover-bg-color': '#481C73'}}
                 onClick={() => setShowNav(false)}
                 onMouseEnter = {() => setPjName("the-mysc-box")}
                 onMouseLeave = {() => setPjName("")}
              >
                <div className='nav__item__transform-wrapper'
                     style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                >
                  <h5 className='nav__item__title project-title'>the mysc. box</h5>
                  <div className='nav__item__category body-text'>web, branding</div>
                </div>
              </NavLink>
            </li>
            <li className='nav__list__item'>
              <NavLink className='nav__item projects' 
                 to='/projects/kedamono'
                 style={{'--hover-bg-color': '#DED90D'}}
                 onClick={() => setShowNav(false)}
                 onMouseEnter = {() => setPjName("kedamono")}
                 onMouseLeave = {() => setPjName("")}
              >
                <div className='nav__item__transform-wrapper'
                     style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                >
                  <h5 className='nav__item__title project-title'>Tsukiyo no Kedamono</h5>
                  <div className='nav__item__category body-text'>web, illustration</div>
                </div>
              </NavLink>
            </li>
            <li className='nav__list__item'>
              <NavLink className='nav__item projects' 
                 to='/projects/calendar'
                 style={{'--hover-bg-color': '#FD9AB2'}}
                 onClick={() => setShowNav(false)}
                 onMouseEnter = {() => setPjName("calendar")}
                 onMouseLeave = {() => setPjName("")}
              >
                <div className='nav__item__transform-wrapper'
                     style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                >
                  <h5 className='nav__item__title project-title'>One Song A Day Calendar</h5>
                  <div className='nav__item__category body-text'>product, branding, illustration</div>
                </div>
              </NavLink>
            </li>
            <li className='nav__list__item'>
              <NavLink className='nav__item projects' 
                 to='/projects/lemonpoly'
                 style={{'--hover-bg-color': '#49A998'}}
                 onClick={() => setShowNav(false)}
                 onMouseEnter = {() => setPjName("lemonpoly")}
                 onMouseLeave = {() => setPjName("")}
              >
                <div className='nav__item__transform-wrapper'
                     style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                >
                  <h5 className='nav__item__title project-title'>Lemonpoly</h5>
                  <div className='nav__item__category body-text'>branding, illustration</div>
                </div>
              </NavLink>
            </li>
            <li className='nav__list__item'>
              <NavLink className='nav__item' 
                 to='/projects/dulce'
                 style={{'--hover-bg-color': '#885513'}}
                 onClick={() => setShowNav(false)}
                 onMouseEnter = {() => setPjName("dulce")}
                 onMouseLeave = {() => setPjName("")}
              >
                <div className='nav__item__transform-wrapper'
                     style={showNav ? {opacity : 1, transform : `translate(0px,0px)`} : {opacity : 0, transform : `translate(${200}px,0px)`}}
                >
                  <h5 className='nav__item__title project-title'>Dulce The Cookie</h5>
                  <div className='nav__item__category body-text'>logo, branding</div>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>

        <ProjectVisual pjName={pjName}/>
        <div className={showNav ? "nav-backdrop active" : "nav-backdrop"}></div>
      </header>
    )  
}