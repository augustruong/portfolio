import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Modal } from '../components/Modal'

export default function AboutPage() {
    const [showModal, setShowModal] = useState(false);

    return (
    <div id='about' className='flex-column-ct yellow-bg'>
        <section className='intro__section flex-column-ct'>
            <img className='ellipse' src={process.env.PUBLIC_URL + `/images/ellipse.png`}/>
            <div className='me-wrapper flex-column-ct justify-center mt50'>
                <img className='me-tapioka-img' src="https://i.imgur.com/OSSrMhb.png"/>
                <img className='stars-img' src="https://i.imgur.com/iv65Bkf.png"/>
                <div className='circle'></div>
                <h2 className='page-title'>August</h2>
                
                <div className='body-text'>
                    I’m Vietnamese living in Tokyo, Japan, <br/>
                    <span className='highlight'>Digital Hollywood University</span> since 2019.<br/>
                    Majoring in <span className='highlight'>Website Direction and Design</span>, <br/>
                    fusing with <span className='highlight'>UX/UI Design and Graphic Design</span>. 
                </div>
            </div>
        </section>
        <section className='challenge__section flex-column-ct'>
            <img className='ellipse' src={process.env.PUBLIC_URL + `/images/ellipse.png`}/>
            <div className='me-wrapper flex-column-ct justify-center'>
                <img className='me-jump-img' src={"https://i.imgur.com/0pzVkV2.png"}/>
                <div className='circle'></div>
                <h2 className='page-title'>Challenge</h2>
                <div className='body-text'>
                    Challenge me with any kind of concept. <br/>
                    We can get through this together.
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
