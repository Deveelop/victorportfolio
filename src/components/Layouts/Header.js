import {useContext} from 'react'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import purposeContext from '../store/purpose-context'
function Header() {
  const ctx = useContext(purposeContext);
  return (
    <nav className=' bg-[--col] h-20 w-full items-center p-8  '>
    
    <FaBars onClick={ctx.navFuction} className='md:hidden ' color='white' size={35}/>
    <ul className=' list-none  justify-end hidden sm:flex '>
        <Link to='/' className='  no-underline'><a className=' text-decoration-line: no-underline text-white px-3 rounded text-lg uppercase hover:bg-[#89fa5c]  ' href='http://'>Home</a></Link>
        <Link to='/about'  className='  no-underline'><a className='text-decoration-line: no-underline text-white px-3 rounded text-lg uppercase hover:bg-[#89fa5c]' href='http://'>About me</a></Link>
        <Link to='/projects'  className='  no-underline '><a className='text-decoration-line: no-underline text-white px-3 rounded text-lg uppercase hover:bg-[#89fa5c]' href='http://'>My works</a></Link>
    </ul>
</nav>
  )
}

export default Header