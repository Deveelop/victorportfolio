import React from 'react'

function ProjectDemo() {
  return (
    <div className='bg-gray-500  '>
        <h3 className=' text-center font-bold '>/work.</h3>
        <p className=' text-center font-semibold'>Selected work I've taken on in the past.</p>
        <div className=' p-3  grid lg:grid-cols-3 gap-10'>
        <div className='bg-white rounded overflow-hidden shadow-md'>
            <img src='/images/workimg.jpg' alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className='m-4 '>
                <span className='font-bold'>Mamaput Food web app</span>
                <span className=' block text-gray-500 text-sm'><a className=' text-decoration-line: no-underline font-semibold' href='https://mamaputfood.netlify.app/'>https://mamaputfood.netlify.app/</a></span>
            </div>
        </div>
        <div className='bg-white rounded overflow-hidden shadow-md'>
            <img src='/images/workimg.jpg' alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className='m-4 '>
                <span className='font-bold '>Expense Tracker web app</span>
                <span className=' block text-gray-500 text-sm'><a className=' text-decoration-line: no-underline font-semibold' href='https://expensetrackerdevee.netlify.app/'>https://expensetrackerdevee.netlify.app/</a></span>
            </div>
        </div>
        <div className='bg-white rounded overflow-hidden shadow-md'>
            <img src='/images/workimg.jpg' alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className='m-4 '>
                <span className='font-bold'>HouseFair</span>
                <span className=' block text-gray-500 text-sm'><a className=' text-decoration-line: no-underline font-semibold' href='#'>Loading...</a></span>
            </div>
        </div>
        <div className='bg-white rounded overflow-hidden shadow-md'>
            <img src='/images/workimg.jpg' alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className='m-4 '>
                <span className='font-bold'>devee.dev</span>
                <span className=' block text-gray-500 text-sm'>description</span>
            </div>
        </div>
        <div className='bg-white rounded overflow-hidden shadow-md'>
            <img src='/images/workimg.jpg' alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className='m-4 '>
                <span className='font-bold'>Locationbase Weather web</span>
                <span className=' block text-gray-500 text-sm'><a className=' text-decoration-line: no-underline font-semibold' href='https://reactweatherappdevee.netlify.app/'>https://reactweatherappdevee.netlify.app/</a></span>
            </div>
        </div>
        <div className='bg-white rounded overflow-hidden shadow-md'>
            <img src='/images/workimg.jpg' alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className='m-4 '>
                <span className='font-bold'>Grouby</span>
                <span className=' block text-gray-500 text-sm'><a className=' text-decoration-line: no-underline font-semibold' href='https://grouby.netlify.app/'>https://grouby.netlify.app/</a></span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectDemo