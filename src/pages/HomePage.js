import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <div id='home' className='flex-column-ct yellow-bg'>
        <div className='kv-wrapper flex-column-ct'>
            <div className='me-wrapper flex-column-ct justify-center'>
                <img className='text-arc' src={process.env.PUBLIC_URL + `/images/text-arc.svg`}/>
                <img className='me-gif' src={process.env.PUBLIC_URL + `/images/me/me-gif.png`}/>
                <div className='circle'></div>
                <div className='tunnel-container'>
                    <div className='circles tunnel-anim' style={{'--delay': 5}}></div>
                    <div className='circles tunnel-anim' style={{'--delay': 4}}></div>
                    <div className='circles tunnel-anim' style={{'--delay': 3}}></div>
                    <div className='circles tunnel-anim' style={{'--delay': 2}}></div>
                    <div className='circles tunnel-anim' style={{'--delay': 1}}></div>
                    <div className='circles tunnel-anim' style={{'--delay': 0}}></div>
                </div>
                <h1 className='page-title'>August</h1>
            </div>
        </div>
        <div className='btn-wrapper'>
            <Link to='/about'>
                <button className='beige-btn'>About Me</button>
            </Link>
            <Link to='/projects'>
                <button className='mint-btn'>My Projects</button>
            </Link>
        </div>
    </div>
  )
}