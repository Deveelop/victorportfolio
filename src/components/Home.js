import React from 'react'
import ProjectCarousel from './ProjectCarousel'
import styles from './Home.module.css'
import { Button } from 'react-bootstrap'

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.notes}>
        <h1>Front-End React</h1>
        <h1>Developer</h1>
        <p>Hi, I'm Victor Nathaniel. A passionate Front-end React </p>
        <p>Developer based in FCT Abuja, Nigeria.</p>
        
        <div>
        <span><p>linkedIn</p></span>
        <span><p>gitHub</p></span>
        </div>

          <label>Featured Projects:</label>
        <div className={styles.watt}>
        <ProjectCarousel/>
        </div>

        <div className={styles.stacksicon}>
        <h5>Tech Stack |</h5>
        {/* icons for css html react */}
        </div>
        <div>
           <Button>Download My CV</Button>
           </div>
        </div>
        <div className={styles.owner}>
          <img src='/images/owner.png' alt=""/>
        </div>
        
        
    </div>
  )
}

export default Home