import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Modal } from '../components/Modal'

export default function AboutPage() {
    const [showModal, setShowModal] = useState(false);

    return (
    <div id='about' className='flex-column-ct yellow-bg'>
        <section className='intro__section flex-column-ct'>
            <div className='me-wrapper flex-column-ct justify-center mt50'>
                <img className='me-tapioka-img' src={process.env.PUBLIC_URL + `/images/me/profile.png`}/>
                <div className='circle'></div>
                <h2 className='page-title'>August</h2>
                
                <div className='body-text'>
                    I’m Vietnamese living in Tokyo, Japan, <br/>
                    Digital Hollywood University since 2019.<br/>
                    Majoring in Website Direction and Design, <br/>
                    fusing with UX/UI Design and Graphic Design. 
                </div>
            </div>
        </section>
        <section className='challenge__section flex-column-ct'>
            <div className='me-wrapper flex-column-ct justify-center'>
                <img className='me-jump-img' src={process.env.PUBLIC_URL + `/images/me/jump.png`}/>
                <div className='circle'></div>
                <h2 className='page-title'>Challenge</h2>
                <div className='body-text'>
                    Challenging myself with any kind of concept. <br/>
                    We can do this together.
                </div>
                <div className='btn-wrapper'>
                    <Link to='/portfolio/projects'><button className='beige-btn'>My Projects</button></Link>
                    <button className='mint-btn' onClick={() => setShowModal(!showModal)}>Contact Me</button>                    
                </div>
            </div>
        </section>
        <Modal showModal={showModal} setShowModal={setShowModal} />

    </div>
  )
}
