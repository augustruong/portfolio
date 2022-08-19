import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

import ProjectDetail from '../components/ProjectDetail';
import ProjectInfo from '../components/ProjectInfo';
import projectData from '../ProjectData.json'

export default function TheProject(props) {
    const thisProject = projectData[props.index]

    return(
        <div className='the-project beige-bg'>
            <div id='top' className='the-project__header t-center'>
                <div className='subheader'>project</div>
                <h3 className='ja-title project-title'>{thisProject.jaTitle}</h3>
                <h5 className='en-title project-title'>{thisProject.enTitle}</h5>
            </div>
           
            <div className='the-project__cover'>
                {window.innerWidth > 769 &&
                    <img src={process.env.PUBLIC_URL + `/images/projects/${thisProject.projectId}/cover-pc.png`}/>
                }
                {window.innerWidth <= 769 &&
                    <img src={process.env.PUBLIC_URL + `/images/projects/${thisProject.projectId}/cover-mb.png`}/>
                }
            </div>

            <ProjectInfo index={props.index}/>
            <ProjectDetail index={props.index}/>

            <Link to='/portfolio/projects'>
                <button className='mint-btn m-center mt15p'>Back to List</button>
            </Link>
            <a href='#top' className='back-to-top'>
                <img src={process.env.PUBLIC_URL + `/assets-icon/back-to-top.svg`}/>
            </a>
        </div>
    )
}
