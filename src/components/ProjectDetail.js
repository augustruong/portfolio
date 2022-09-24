import React, { useState } from 'react'
import { Link } from 'react-scroll'
import projectData from '../ProjectData.json'

import Project00 from './project-contents/Project00'
import Project01 from './project-contents/Project01'
import Project02 from './project-contents/Project02'
import Project03 from './project-contents/Project03'
import Project04 from './project-contents/Project04'
import Project05 from './project-contents/Project05'

export default function ProjectDetail(props) {
    const thisProject = projectData[props.index]

    const [current,setCurrent] = useState("plan")
    const [planShow,setPlanShow] = useState(true)
    const [designShow,setDesignShow] = useState(true)
    
    return(
        <div className='project-detail'>
            {/* <LightBox showBox={showBox} setShowBox={setShowBox} /> */}

            <nav className='project-detail__nav'>
                <ul className='p-sticky'>   
                    <li className='project-detail__nav__cell'>
                        <Link to='plan-section' 
                            spy={true} offset={50} duration={500}
                            className = {current === "plan" ? "active" : ""}
                            onClick = {() => setCurrent("plan")}
                        >
                            <span className='project-detail__nav__title'>
                                <span className='project-detail__nav__title__en'>PLANNING</span>
                                <span className='project-detail__nav__title__ja'>制作企画</span>
                            </span>
                            <i className='arrow-down'>
                                <img src={process.env.PUBLIC_URL + `/assets-icon/arrow-down.svg`}/>
                            </i>
                        </Link>
                    </li>
                    <li className='project-detail__nav__cell'>
                        <Link to='design-section' 
                            spy={true} offset={50} duration={500}
                            className={current === "design" ? "active" : ""}
                            onClick = {() => setCurrent("design")}
                        >
                            <span className='project-detail__nav__title'>
                                <span className='project-detail__nav__title__en'>DESIGN</span>
                                <span className='project-detail__nav__title__ja'>デザイン</span>
                            </span>
                            <i className='arrow-down'>
                                <img src={process.env.PUBLIC_URL + `/assets-icon/arrow-down.svg`}/>
                            </i>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='project-detail__body'>
                <section id='plan-section' className='project-detail__body__section is-open'
                        onMouseOver={() => setCurrent("plan")}
                >
                    <header className='project-detail__header'>
                        <button className='project-detail__header__button'>
                            <div className='project-detail__header__title'>
                                <div className='project-detail__header__title__en'>PLANNING</div>
                                <div className='project-detail__header__title__ja'>制作企画</div>
                            </div>
                            <i className={planShow ? 'project-detail__header__plus icon-plus show' : 'project-detail__header__plus icon-plus'}
                                onClick={() => { setPlanShow(!planShow) }}
                            >
                                <span></span>
                            </i>
                        </button>
                    </header>

                    <div className= {planShow ? 'project-detail__contents show' : 'project-detail__contents'}>
                        { props.index === 0 && <Project00 section="plan" language="ja"/>}
                        { props.index === 1 && <Project01 section="plan" language="ja"/>}
                        { props.index === 2 && <Project02 section="plan" language="ja"/>}
                        { props.index === 3 && <Project03 section="plan" language="ja"/>}
                        { props.index === 4 && <Project04 section="plan" language="ja"/>}
                        { props.index === 5 && <Project05 section="plan" language="ja"/>}
                    </div>
                </section>

                <section id='design-section' className='project-detail__body__section is-open'
                    onMouseOver={() => setCurrent("design")}
                >
                    <header className='project-detail__header'>
                        <button className='project-detail__header__button'>
                            <div className='project-detail__header__title'>
                                <div className='project-detail__header__title__en'>DESIGN</div>
                                <div className='project-detail__header__title__ja'>デザイン</div>
                            </div>
                            
                            <i className={designShow ? 'project-detail__header__plus icon-plus show' : 'project-detail__header__plus icon-plus'}
                                onClick={() => setDesignShow(!designShow)}
                            >
                                <span></span>
                            </i>
                        </button>
                    </header>

                    <div className= {designShow ? 'project-detail__contents show' : 'project-detail__contents'}>
                        { props.index === 0 && <Project00 section="design" language="ja"/>}
                        { props.index === 1 && <Project01 section="design" language="ja"/>}
                        { props.index === 2 && <Project02 section="design" language="ja"/>}
                        { props.index === 3 && <Project03 section="design" language="ja"/>}
                        { props.index === 4 && <Project04 section="design" language="ja"/>}
                        { props.index === 5 && <Project05 section="design" language="ja"/>}
                    </div>
                </section>
            </div>
        </div>
    )
}