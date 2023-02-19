import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineCheckCircle, AiFillCheckCircle} from 'react-icons/ai'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/reducer';
import toast from 'react-hot-toast';
const TodoItem = ({item}) => {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const inputRef = useRef(true);

    useEffect(() => {
        if(item.completed) {
            setChecked(true)
        } else {
            setChecked(false)
        }
    }, [item.completed])
    
    const handlDelete = (item) => {
        dispatch(deleteTodo(item.id))
        toast.success('Delete Successfully')
    }

    const handleUpdate = (item) => {
        inputRef.current.disabled = false;
        inputRef.current.focus()
    }
    const update = (id, value, e) => {
        if(e.which === 13) {
            dispatch(updateTodo({
                ...item,
                id, 
                item:value
            }));
            inputRef.current.disabled = true;
            toast.success("Update Successfully")
        }
    }
    const handleCheck = () => {
        dispatch(updateTodo({
            ...item,
            completed: !checked
        }))
    }
  return (
    <li key={item.id} className='todo-item'>

                            <div className='check-item'>
                                <div className='check-item' onClick={() => handleCheck()}>
                                    <div className={`check ${item.completed ? 'active' : ''}`}>
                                        <AiFillCheckCircle />
                                    </div>
                                    <div className={`check ${item.completed ? '' : 'active'}`}>
                                        <AiOutlineCheckCircle />
                                    </div>
                                </div>
                                <div>
                                    <input className={`item-input ${item.completed ? 'item-title' : ''}`} ref={inputRef} disabled={inputRef} defaultValue={item.item} onKeyDown={(e) => update(item.id, inputRef.current.value, e)}/>
                                </div>
                            </div>
                            <div className='todo-actions'>
                                    <span>{item.time}</span>
                                <div className='todo-icon' onClick={() => handleUpdate(item)} onKeyDown={handleUpdate} role="button" tabIndex={0}>
                                    <MdEdit />
                                </div>
                                <div className='todo-icon' onClick={() => handlDelete(item)} onKeyDown={handlDelete} role="button" tabIndex={0}>
                                    <MdDelete />
                                </div>
                            </div>
                        </li>
  )
}

export default TodoItem