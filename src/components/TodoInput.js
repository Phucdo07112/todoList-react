import React from 'react'

const TodoInput = ({handleSubmit, todo, setTodo}) => {

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="add-todos">
            <input type="text" className='todo-input' value={todo} onChange={(e) => handleChange(e)} placeholder="Enter a task..."/>
            <button className='add-btn' type='submit'>Add Task</button>
        </form>
  )
}

export default TodoInput