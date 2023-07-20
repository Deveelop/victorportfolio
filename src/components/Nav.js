import React from 'react'
import './Nav.css'




function Nav() {
  return (
    <div>
     
    
          

        
       
        <section id='about'>
         <h2>About Me </h2>
         <p> lorem ipsum sskskskk  s sksk skks skkks sk ssskm skks skk skks kks ksk skks kks kks </p>
        </section>

        <section id='projects'>
        <h2>My Projects</h2>
        <div className='project'>
            <h3>Project 1</h3>
            <p>Description of project 1</p>
        </div>
        <div className='project'>
            <h3>Project 2</h3>
            <p>Description of project 2</p>
        </div>
        </section>

        <section id='contact'>
            <h2>Contact Me</h2>

            <form>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name'/>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email'/>
                <button>Submit</button>
            </form>
        </section>

        <footer>
            <p>&copy; 2023 Victor's Portfolio. All rights reserved</p>
        </footer>
        
    </div>
  )
}

export default Nav