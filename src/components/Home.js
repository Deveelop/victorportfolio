import React from 'react'
import ProjectCarousel from './ProjectCarousel'


import HtmlIcon from './SVG/HtmlIcon'
import CssIcon from './SVG/CssIcon'
import JavascriptIcon from './SVG/JavascriptIcon'
import ReactIcon from './SVG/ReactIcon'
import Imgbg from './Imgbg'
import Trials from './Imgbg'
import { BsLinkedin, BsGithub} from 'react-icons/bs'
import { icons } from 'react-icons'
function Home() {
  return (
   
    
   
    <div className='flex flex-col   sm:grid sm:grid-cols-3'>
      <div className=' bg-[#470288]  sm:col-span-2 '>
      <div className='  ml-4 sm:ml-40 '> 
        <h1 className=' text-[#89fa5c] font-bold mt-4 '>Front-End React</h1>
        <h1 className=' text-[#89fa5c] font-bold'>Developer</h1>
        <p className='text-white'>Hi, I'm Victor Abuka. A passionate Front-end React</p>
        <p className='text-white'>Developer based in Makurdi, Benue state.</p>
    
      <div className='flex gap-2'>
      <a href="http://" target="_blank" rel="noopener noreferrer"> <BsLinkedin size={25} color='white' /> </a>
      <a href="http://" target="_blank" rel="noopener noreferrer"> <BsGithub size={25} color='white' /> </a>
      </div>
      <div className=' sm:w-40 sm:m-4 '>
       <label  className='text-white font-bold mt-4'>Featured Projects</label>
       <div className=' mt-2 w-fit rounded-3xl bg-[#89fa5c] border-8 border-[#89fa5c] '>
       <ProjectCarousel/>
       </div>
      </div>
      </div>
    
      <div className='flex gap-2 mb-2 mt-4 ml-4 sm:gap-10 sm:ml-40 sm:mb-4'>
     <span className='text-white font-bold'>Tech Stacks |</span>
     <span className=''><CssIcon/></span>
     <span><JavascriptIcon/></span>
     <span><ReactIcon/></span>
     <span><HtmlIcon/></span>
      </div>
      </div>


       <div className='bg-[#89fa5c] sm:relative'>
        <div className='sm:absolute sm:top-12 sm:-left-40'>
        <Imgbg/>
       <img  src='/images/owner.png' alt='handsome vee' className=' w-50 border-8 border-[#89fa5c] rounded-full  '/>
       </div>
       </div>
        

       
        
    </div>
   
 
  )
}

export default Home;