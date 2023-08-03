import {useState} from 'react'

function SendMsg() {
  const [enterdName, setEnteredName] = useState('');
  const [enterdEmail, setEnteredEmail] = useState('');
  const [enterdMsg, setEnteredMsg] = useState('');

  const nameChanger = (e) => {
   setEnteredName(e.target.value);
  }
  const emailChanger = (e) => {
    setEnteredEmail(e.target.value)
  }
  const msgChanger = (e) => {
    setEnteredMsg(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const userMessage={
      name: enterdName,
      email: enterdEmail,
      message: enterdMsg
    }
    console.log(userMessage);
    setEnteredEmail('');
    setEnteredName('')
    setEnteredMsg('')

  }
  return (
    <div className='flex justify-center mt-4 ml-4 '>
      <div>
        <h1 className='text-[#5005b1] font-bold'>Send me a </h1>
        <h1 className='text-[#5005b1] font-bold'>message!</h1>
        <p className=' font-semibold '>Got a question or proposal, or just want to say hello? Go ahead.</p>
    <form onSubmit={submitHandler}>
        <div className='flex flex-col w-80'>
    <label  htmlFor='name' className='font-bold' >Your Name</label>
    <input id='name' value={enterdName} onChange={nameChanger} className='appearance-none px-4 py-2 mb-4 border-b border-gray-400 w-full focus:outline-none focus:border-purple-600 focus:border-b-2 placeholder-gray-400 placeholder-opacity-75 transition-colors' placeholder='Enter your name'/>
    <label htmlFor='email' className='font-bold' >Email Address</label>
    <input id='email' value={enterdEmail} onChange={emailChanger} className='appearance-none px-4 py-2 mb-4 border-b border-gray-400 w-full focus:outline-none focus:border-purple-600 focus:border-b-2 placeholder-gray-400 placeholder-opacity-75  transition-colors' placeholder='Enter your email address'/>
    <label htmlFor='message' className='font-bold'>Your Message</label>
    <input id='message' value={enterdMsg} onChange={msgChanger}  className='appearance-none px-4 py-2 mb-4 border-b border-gray-400 w-full focus:outline-none focus:border-purple-600 focus:border-b-2 placeholder-gray-400 placeholder-opacity-75  transition-colors' placeholder='Hi, I think we need you...'/>
     </div>
     <button className='border-2 p-2 border-blue-950 px-4 mb-4 '>SHOOT</button>
     </form>
     </div>
    </div>
  )
}

export default SendMsg