import {useContext} from 'react'
import styles from './SideBar.module.css'
import { Link } from 'react-router-dom'
import purposeContext from './store/purpose-context'
function Sidebar() {
  const ctx = useContext(purposeContext)
  return (
    
    
      <ul className={styles.sidebar}>
        <Link to='/' onClick={ctx.navCloseFunc} className={styles.link}><li>Home</li></Link>
        <Link to='/about'  onClick={ctx.navCloseFunc}  className={styles.link}><li>About me</li></Link> 
        <Link to='/projects'  onClick={ctx.navCloseFunc} className={styles.link}><li>My projects</li></Link>
      </ul>
    
  )
}

export default Sidebar