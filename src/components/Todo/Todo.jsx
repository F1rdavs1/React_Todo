import React, { useState } from 'react'

const Todo = () => {
  const [todo, setTodo] = useState([])
  const handleSubmitForm = (event) => {
    event.preventDefault()
    const data = {
      id:todo.length + 1,
      title:event.target.todoValue.value,
      iscomplate:false
    }
    setTodo([...todo, data])
    event.target.reset()
    console.log(todo);
  }

  const handleClickDeletebtn = (id) => {
    const newTodo = todo.filter(item => item.id !== id)
    setTodo(newTodo)
}
  return (
    <>
      <form onSubmit={handleSubmitForm} className='w-[666px]  flex items-center gap-[5px] bg-white py-[50px] rounded-[20px] px-[20px]'>
        <input className='w-full py-[10px] border-[3px]  border-lime-500 rounded-md font-semibold pl-[10px] focus:border-lime-500 focus:shadow-lg focus:border-border-lime-500' placeholder='Add your todo' required autoComplete='off' name='todoValue'></input>
        <button className='w-[100px] py-[10px] border-[3px] rounded-md bg-[#84CC16] outline-none focus:border-lime-500 focus:shadow-lg text-white border-transparent hover:text-blue-500 hover:bg-white hover:border-blue-500 transition-all ease-linear'>Add</button>
      </form>
      <div className='w-[666px] mx-auto flex justify-between mt-[20px] bg-white py-[30px] px-[20px] rounded-[20px]'>
        <button className='bg-lime-500 text-white border-md p-[10px] rounded-md'>All (0)</button>
        <button className='bg-lime-500 text-white border-md p-[10px] rounded-md'>Complated (0)</button>
        <button className='bg-lime-500 text-white border-md p-[10px] rounded-md'>UnComplated (0)</button>
      </div>
      <ul className='w-[666px] mx-auto mt-[10px] flex items-center justify-center flex-col gap-[10px] bg-white py-[20px] px-[20px] rounded-[20px]'>
        {todo.map((item, index) => (
          <li key={index} className='w-full py-[10px] bg-lime-500 rounded-md text-white pl-[10px] flex justify-between'>
            <div className='flex items-center justify-center'>
            <span>{index + 1}.</span>
            <strong className='flex items-center'>{item.title}</strong>
            </div>
            <div className='flex gap-[10px]'>
              <input type="checkbox"/>
              <button onClick={() => handleClickDeletebtn(item.id)} className='bg-slate-500 rounded-md p-[6px]'>Delete</button>
              <button className='bg-red-500 rounded-md p-[6px] mr-[10px]'>Update</button>
            </div>
          </li>
        ))}
      </ul>
    </>

  )
}

export default Todo