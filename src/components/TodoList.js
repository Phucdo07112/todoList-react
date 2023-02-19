import React, { useState } from 'react'
import { addTodo, updateTodo } from '../redux/reducer';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [type, setType] = useState("add")
    const [sort, setSort] = useState("all")
    const dispatch = useDispatch()
    const todoList = useSelector((state) => state.todo.todoList) // lấy dữ liệu từ store
    
    const sortedTodoList = [...todoList];
    
    sortedTodoList.sort((a, b) => new Date(b.time) - Date(a.time))
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo === '' ) {
            toast.error('Please enter a title');
            return;
        }
        if (todo) {
            if(type === 'add') {
                dispatch(addTodo({
                    id: uuidv4(),
                    item: todo,
                    completed: false,
                    time: new Date().toLocaleString(),
                }))
                setTodo('')
                toast.success('Task Added Successfully');
            }
            if(type === 'update') {
                dispatch(
                    updateTodo({
                        item: todo,
                    })
                )
            }
        } else {
            toast.error("Title shouldn't be empty");
        }
    } 

    
  return (
    <div className="container">
        <TodoHeader sort={sort} setSort={setSort} Todo={sortedTodoList}/>
        <TodoInput handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} type={type}/>
        
        <ul className='list-item'>
            {
                sortedTodoList.length > 0 && sort === "incomplete"
                    ? sortedTodoList.map((item) => {
                    return (
                        item.completed === false && (
                            <TodoItem key={item.id} item={item} setType={setType} setTodo={setTodo} />
                        )
                    )
                })
                : null
            }

            {/* completed items */}

            {
                sortedTodoList.length > 0 && sort === "completed"
                    ? sortedTodoList.map((item) => {
                    return (
                        item.completed === true && (
                            <TodoItem key={item.id} item={item} setType={setType} setTodo={setTodo} />
                        )
                    )
                })
                : null
            }

            {/* all items */}

            {
                sortedTodoList.length > 0 && sort === "all"
                    ? sortedTodoList.map((item) => {
                    return (
                        <TodoItem key={item.id} item={item} setType={setType} setTodo={setTodo} />
                    )
                })
                : null
            }
        </ul>
    </div>
  )
}

export default TodoList 