import React from 'react'
import styles from './Projects.module.css'
import { Link } from 'react-router-dom'
function Projects() {
  return (
    <div className={styles.generals}>
     
    <div className={styles.contained}>
        <div className={styles.paragraphList}>
            <div className={styles.graphs}>
            <h1>Over the years,</h1>
      <p>I've built products for companies and businesses</p>
      <p>around the globe ranging from marketing</p>
      <p>websites to complex solutions and enterprise</p>
      <p>apps with focus on fast, elegant and accessible user experience.</p>
      </div>
      <div className={styles.graphs}>
      <p>Currently, I work at Grouby.africa as a Lead Frontend Engineer</p>
      <p>to building the best component you can find anywhere in the world.</p>
      <p>Crafting out thoughtful and inclusive experience that adhere to web</p>
      <p>standards for over 3 million users across the world.</p>
      </div>
      <div className={styles.graphs}>
      <p>Before now, I had internship opportunity to collaborate with both</p>
      <p> senior and junior developers across states in Nigeria on projects that has helped</p>
      <p>my career and also broaden my knowledge about React, TypeScript and Nextjs etc.</p>
      </div>
      <div className={styles.graphs}>
      <p>I also once led a frontend team of friends to create an e-learning platform</p>
      <p>through which I built alot of React applications.</p>
      </div>
      </div>
      <div className={styles.worksimg}>
      <img src='/images/workimg.jpg' alt=''/>
      <div className={styles.card}>
        <div className={styles.cardCtrl}>
        <h1>I build &</h1>
        <h1>design stuff</h1>

        <div className={styles.paragraphs}>
            <p>Open source</p>
            <p>projects, web apps</p>
            <p>and experimentals</p>
        </div>
        <div className={styles.action}>
        <Link className=' no-underline text-black ' to='/projectsdemo' ><button className='border-2 p-2 border-blue-950'>SEE MY WORK</button></Link>
        </div>
        </div>
        </div>
      </div>
    </div>

   
    </div>
  )
}

export default Projects