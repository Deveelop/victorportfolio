import React from 'react'
import ProjectCarousel from './ProjectCarousel'
import styles from './Home.module.css'
import { Button } from 'react-bootstrap'
import HtmlIcon from './SVG/HtmlIcon'
import CssIcon from './SVG/CssIcon'
import JavascriptIcon from './SVG/JavascriptIcon'
import ReactIcon from './SVG/ReactIcon'
import LinkedInIcon from './SVG/LinkedInIcon'
import GithubIcon from './SVG/GithubIcon'
import Trials from './Trials'
function Home() {
  return (
    <div className={styles.generals}>
    <div className={styles.container}>
      <div className={styles.subdiv}>
      <div className={styles.notes}>
        <h1>Front-End React</h1>
        <h1>Developer</h1>
        <p>Hi, I'm Victor Abuka. A passionate Front-end React </p>
        <p>Developer based in FCT Abuja, Nigeria.</p>
        
        <div className={styles.profiles}>
        <span><a href='https://www.linkedin.com/in/victor-abuka-b13118201'><LinkedInIcon/></a></span>
        <span><a href='https://github.com/Deveelop'><GithubIcon/></a></span>
        </div>

          <label>Featured Projects:</label>
        <div className={styles.watt}>
        <ProjectCarousel/>
        </div>

        <div className={styles.stacksicon}>
        <h5>Tech Stack |</h5>
      <span><HtmlIcon/></span>
      <span><CssIcon/></span>
      <span><JavascriptIcon/></span>
      <span><ReactIcon/></span>
     
        </div>
        <div className={styles.action}>
           <Button>Download My CV</Button>
           </div>
        </div>
        </div>
        <div className={styles.subdivimg}>
        <div className={styles.owner}>
          <img src='/images/owner.png' alt="handome Vee"/>
       <div className={styles.newSvg}>
       <Trials />
       </div>

        </div>
        </div>
    </div>
    </div>
  )
}

export default Home