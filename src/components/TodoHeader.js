import React from 'react'

const TodoHeader = ({sort, setSort, Todo}) => {
    const dt = new Date().toDateString()
  return (
    <header className='todo-header'>
            <div className="today">
                <h2>{dt}</h2>
                <p>{Todo.length} Active Tasks</p>
            </div>
            <div className="filter-task">
                <button className={sort === "all" ? "active" : ""} onClick={() => setSort("all")}>All Tasks</button>
                <button className={sort === "incomplete" ? "active" : ""} onClick={() => setSort("incomplete")}>Incomplete Tasks</button>
                <button className={sort === "completed" ? "active" : ""} onClick={() => setSort("completed")}>Completed Tasks</button>
            </div>
        </header>
  )
}

export default TodoHeader