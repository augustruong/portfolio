import React from 'react'

export default function ProjectVisual(props) {
    const pjName = props.pjName;
  return (
    <>
        <picture className={pjName === "ochanomizu-dumplings" ? 'project-visual active' : 'project-visual'}>
            <source 
                type="image/webp" 
                srcSet={process.env.PUBLIC_URL + `/images/projects/ochanomizu-dumplings/project-visual.png`}
            />
            <img 
                src={process.env.PUBLIC_URL + `/images/projects/ochanomizu-dumplings/project-visual.png`}
                width="2400" height="1500"
            />
        </picture>
        <picture className={pjName === "ramen-school" ? 'project-visual active' : 'project-visual'}>
            <source 
                type="image/webp" 
                srcSet={process.env.PUBLIC_URL + `/images/projects/ramen-school/project-visual.png`}
            />
            <img 
                src={process.env.PUBLIC_URL + `/images/projects/ramen-school/project-visual.png`}
                width="2400" height="1500"
            />
        </picture>
        <picture className={pjName === "the-mysc-box" ? 'project-visual active' : 'project-visual'}>
            <source 
                type="image/webp" 
                srcSet={process.env.PUBLIC_URL + `/images/projects/the-mysc-box/project-visual.png`}
            />
            <img 
                src={process.env.PUBLIC_URL + `/images/projects/the-mysc-box/project-visual.png`}
                width="2400" height="1500"
            />
        </picture>
        <picture className={pjName === "kedamono" ? 'project-visual active' : 'project-visual'}>
            <source 
                type="image/webp" 
                srcSet={process.env.PUBLIC_URL + `/images/projects/kedamono/project-visual.png`}
            />
            <img 
                src={process.env.PUBLIC_URL + `/images/projects/kedamono/project-visual.png`}
                width="2400" height="1500"
            />
        </picture>
        <picture className={pjName === "calendar" ? 'project-visual active' : 'project-visual'}>
            <source 
                type="image/webp" 
                srcSet={process.env.PUBLIC_URL + `/images/projects/calendar/project-visual.png`}
            />
            <img 
                src={process.env.PUBLIC_URL + `/images/projects/calendar/project-visual.png`}
                width="2400" height="1500"
            />
        </picture>
        <picture className={pjName === "lemonpoly" ? 'project-visual active' : 'project-visual'}>
            <source 
                type="image/webp" 
                srcSet={process.env.PUBLIC_URL + `/images/projects/lemonpoly/project-visual.png`}
            />
            <img 
                src={process.env.PUBLIC_URL + `/images/projects/lemonpoly/project-visual.png`}
                width="2400" height="1500"
            />
        </picture>
        <picture className={pjName === "dulce" ? 'project-visual active' : 'project-visual'}>
            <source 
                type="image/webp" 
                srcSet={process.env.PUBLIC_URL + `/images/projects/dulce/project-visual.png`}
            />
            <img 
                src={process.env.PUBLIC_URL + `/images/projects/dulce/project-visual.png`}
                width="2400" height="1500"
            />
        </picture>
    </>
  )
}
