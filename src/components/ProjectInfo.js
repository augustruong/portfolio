import React from 'react'
import projectData from '../ProjectData.json'

export default function ProjectInfo(props) {
    const thisProject = projectData[props.index]

    return(
        <div className='project-info flex-row-ct justify-center'>
            <div className='project-info__table'>
                <dl className='project-info__table__cell'>
                    <dt>YEAR</dt>
                    <dd>{thisProject.year}</dd>
                </dl>
                <dl className='project-info__table__cell'>
                    <dt>TEAM</dt>
                    <dd>{thisProject.team}</dd>
                </dl>
                <dl className='project-info__table__cell'>
                    <dt>CATEGORY</dt>
                    <dd>{thisProject.category}</dd>
                </dl>
                <dl className='project-info__table__cell'>
                    <dt>BIO</dt>
                    <dd>{thisProject.bio}</dd>
                </dl>
                <dl className='project-info__table__cell'>
                    <dt>URL</dt>
                    <dd><a href={thisProject.url}>{thisProject.url}</a></dd>
                </dl>
            </div>
            <div className='project-info__img'>
                <img src={process.env.PUBLIC_URL + `/images/projects/${thisProject.projectId}/project-info__img.png`}/>
            </div>
        </div>
    )
}
