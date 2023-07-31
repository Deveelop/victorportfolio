import React from 'react'
import styles from './About.module.css'
function About() {
  return (
    <>
    <div className={styles.container}>
   <div className={styles.profile}>
    <h2>Victor Abuka</h2>
    <p>Frontend Developer</p>
        <div className={styles.info}>
       <h1>Design</h1>
       <div className={styles.paragraphs}>
       <p>I'm probably not the typical designer positioned</p>
       <p>behind an illustrator artboard adjusting pixels,</p>
       <p>but trust me, I'm the best shot you've got for a designer.</p>
       <p>Immersed in stylessheets tweaking font</p>
       <p>sizes and contemplating layouts is where you'll find me.</p>
       <p>I'm committed to creating fluent user experience while staying fashionable</p>
       </div>
       <h1>Engineering</h1>
       <div className={styles.paragraphs}>
       <p>I actually wanted to be building </p>
       <p>electronics(why I applied for Elec/Elec Engr. at University of Agric. Makurdi Nigeria).</p>
       <p>But ended up studyin Mathematics and now I'm love with building websites.</p>
       <p>In building JavaScript applications, I'm equipped with just the right tools, and can</p>
       <p>absolutely function independently of them to deliver fast,</p>
       <p> resilient solutions optimized for  scale-performance and scalability are priorities on my radar.</p>
       </div>
        </div>
   </div>
   <div className={styles.overHead}>
       <div className={styles.inner}>
        <div className={styles.counter}>
          <div className={styles.containBox}>
        <div className={styles.box}>
          <span>2+</span>
          <h3>years of experience</h3>
        </div>
        <div className={styles.box}>
          <span>100+
          </span>
          <h3>projects counting</h3>
        </div>
        <div className={styles.box}>
          <span>1000+</span>
          <h3>happy clients</h3>
        </div>
        <div className={styles.box}>
          <span>26+</span>
          <h3>awards won</h3>
        </div>
        </div>
      </div>
    </div>
    </div>
    
  
    </div>
    </>
  )
}

export default About