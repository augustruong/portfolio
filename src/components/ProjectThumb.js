import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import { Component } from 'react/cjs/react.production.min';

export default class ProjectThumb extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
        <Link to={`/projects/${this.props.projectId}`} className='project-thumb movTgt is-animation'>
                <div className='project-thumb__inner mb20'>
                    <figure className='project-thumb__img-wrapper slideimg'>
                        <div className='thumbslide'>
                            <img src={process.env.PUBLIC_URL + `/images/projects/${this.props.projectId}/pc-design.png`}
                                 alt={process.env.PUBLIC_URL + `/images/projects/${this.props.projectId}/thumbslide.png`}
                            />
                        </div>
                    </figure>
                </div>
                
                <h5 className='project-thumb__title project-title'>{this.props.title}</h5>
                <div className='project-thumb__category body-text'>{this.props.category}</div>
        </Link>
    )
  }
}
