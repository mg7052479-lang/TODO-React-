import React from 'react'
import { useState, useEffect } from 'react'


const App = () => {

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : []
  })
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  const [editTask, setEditTask] = useState(null)

 


  const submitHandler = (e) => {
    e.preventDefault()
    if (task.trim() === '') return alert("Write tasks")
    setTasks([...tasks, task])
    setTask('');
  }
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className='flex flex-col items-center gap-5 '>
        <label className='font-bold text-5xl'>Todo</label>
        <div className='flex gap-5'>
          <input
            value={task}
            onChange={(e) =>
              setTask(e.target.value)}
            type="text" className='bg-blue-500 w-66 h-10 rounded-xl px-4'
            placeholder='Add the new task' />
          <button
            className=' cursor-pointer px-4 bg-blue-300 rounded-xl text-xl '>
            Add</button>
        </div>
      </form>
      <div className='flex flex-col items-start ml-20  mt-10 '>
        <h1 className='font-semibold text-6xl mb-6 underline'>Tasks</h1>


        <ul className='flex flex-wrap gap-5 ' >
          {tasks.map((t, index) => (
            <li
              key={index}
              className=' font-medium flex items-center justify-between gap-20
               bg-gray-100 px-6 py-5 rounded-xl'
            >{t}
           <div className='flex items-center justify-between gap-2'>
             <button className='bg-green-500 px-3  rounded-2xl font-semibold'
              >
              Edit
            </button>
              <button
                onClick={() => {
                  const copy = [...tasks]
                  copy.splice(index, 1)
                  setTasks(copy);
                }}
                className='bg-green-500 px-3  rounded-2xl font-semibold'>
                Delete
              </button>
            </div></li>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default App

