import React, { useState } from 'react'
import ProjectThumb from '../components/ProjectThumb'

export default function ProjectPage() {
    const [selectedCategory,setSelectedCategory] = useState("all")

    return (
        <div id='projects' className='beige-bg'>
            <div className='projects__header'>
                <h2 className='page-title'>Projects</h2>
                <nav className='projects__nav flex-row-ct justify-ct'>
                    <div className={`projects__nav__item body-text ${selectedCategory === "all" ? ' active' : ''}`}
                        onClick={() => setSelectedCategory("all")}
                    > All
                    </div>
                    <div className={`projects__nav__item body-text ${selectedCategory === "web" ? ' active' : ''}`}
                        onClick={() => setSelectedCategory("web")}
                    > Web
                    </div>
                    <div className={`projects__nav__item body-text ${selectedCategory === "product" ? ' active' : ''}`}
                        onClick={() => setSelectedCategory("product")}
                    > Product
                    </div>
                    <div className={`projects__nav__item body-text ${selectedCategory === "branding" ? ' active' : ''}`}
                        onClick={() => setSelectedCategory("branding")}
                    > Branding
                    </div>
                </nav>
            </div>
        
            <section className='projects__list flex-column'>
                <ProjectThumb />
                {selectedCategory === "all" &&
                    <>
                        <ProjectThumb projectId="ochanomizu-dumplings" title="Ochanomizu Dumplings" category="landing page, illustration"/>
                        <ProjectThumb projectId="ramen-school" title="Yamato Online Ramen School" category="landing page, illustration"/>
                        <ProjectThumb projectId="kedamono" title="Tsukiyo no Kedamono" category="web, illustration"/>
                        <ProjectThumb projectId="the-mysc-box" title="the mysc. box" category="web, branding"/>
                        <ProjectThumb projectId="calendar" title="One Song A Day Calendar" category="product, branding, illustration"/>
                        <ProjectThumb projectId="lemonpoly" title="Lemonpoly" category="branding, illustration"/>
                    </>
                }
                {selectedCategory === "web" &&
                    <>
                        <ProjectThumb projectId="ochanomizu-dumplings" title="Ochanomizu Dumplings" category="landing page, illustration"/>
                        <ProjectThumb projectId="ramen-school" title="Yamato Online Ramen School" category="landing page, illustration"/>
                        <ProjectThumb projectId="kedamono" title="Tsukiyo no Kedamono" category="web, illustration"/>
                        <ProjectThumb projectId="the-mysc-box" title="the mysc. box" category="web, branding"/>
                    </>
                }
                {selectedCategory === "product" &&
                    <>
                        <ProjectThumb projectId="calendar" title="One Song A Day Calendar" category="product, branding, illustration"/>
                        <ProjectThumb projectId="lemonpoly" title="Lemonpoly" category="branding, illustration"/>
                    </>
                }
                {selectedCategory === "branding" &&
                    <>
                        <ProjectThumb projectId="the-mysc-box" title="the mysc. box" category="web, branding"/>
                        <ProjectThumb projectId="calendar" title="One Song A Day Calendar" category="product, branding, illustration"/>
                        <ProjectThumb projectId="lemonpoly" title="Lemonpoly" category="branding, illustration"/>
                    </>
                }
            </section>
        </div>
  )
}
