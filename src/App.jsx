import React from 'react'

const App = () => {
  return (
    <div>
      <form  className='flex flex-col items-center gap-5 '>
        <label htmlFor="item" className='font-bold text-5xl'>Todo</label>
        <div className='flex gap-5'>
          <input type="text" className='bg-blue-500 w-66 h-10 rounded-xl px-4' placeholder='Add the new task' />
        <button className=' cursor-pointer px-4 bg-blue-300 rounded-xl text-xl '>Add</button>
        </div>
      </form>
      <div className='flex flex-col items-start ml-20  mt-10 '>
        <h1 className='font-semibold text-6xl mb-6 underline'>Tasks</h1>
        <ul >
          <li className=' font-medium flex items-center justify-between gap-20 bg-gray-100 px-10 py-5 rounded-xl'>add the last <button className='bg-green-500 px-3  rounded-2xl font-semibold'>Delete</button></li>
          
        </ul>
      </div>
    </div>
  )
}

export default App

