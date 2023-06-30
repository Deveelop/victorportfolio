import React from 'react'
import styles from './Header.module.css'
import MenuIcon from './MenuIcon'
function Header() {
  return (
    <nav className={styles.nav}>
      <span className={styles.icon}><MenuIcon/></span>
      
    <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About Me</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>SKILLs</a></li>
        <li><a href='#'>testimonials</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>Privacy policy & legal info.</a></li>
    </ul>
</nav>
  )
}

export default Header