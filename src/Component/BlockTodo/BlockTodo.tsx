import { useSelector } from 'react-redux'
import s from './BlockTodo.module.css'
import { ItemType, removeTodo, todoEdit, todoSelector } from '../../Redux/Slice/TodoSlise'
import penIcon from '../../img/icons8-ручка-100.png'
import { useState, useEffect } from 'react'
import { useAppDispatch } from '../../Redux'



const BlockTodo: React.FC = () => {
    const { item } = useSelector(todoSelector)
    const dispatch = useAppDispatch()
    const [completed, SetCompleted] = useState(false)
    const [todoEditing, setTodoEditing] = useState<null | number>(null);
    const [editingText, setEditingText] = useState("");
    const [todos, setTodos] = useState<ItemType[]>([]);
    console.log(todos)
    const handleCompleted = () => {
        SetCompleted(!completed)
    }
    const deleteId = (id: number) => {
        dispatch(removeTodo({ id } as ItemType))
    }

    const submitEdits = (id: number) => {
        const updatedTodos = [...item].map((todo) => {
            if (todo.id === id) {
                console.log(todo.text)
                return { ...todo, text: editingText }
            }
            return todo;
        });
        setTodos(updatedTodos);
        setTodoEditing(null);
    }

    useEffect(() => {
        dispatch(todoEdit(todos))
    }, [todos])
    return (
        <div className={s.block}>
            {
                item && item.map((todo, id) =>
                    <li className={s.todo_container} key={id}>
                        <div className={s.item}>
                            {todo.id === todoEditing ? (
                                <div className={s.popup}>
                                    <p>change todo</p>
                                    <input
                                        
                                        type="text"
                                        onChange={(e) => setEditingText(e.target.value)}
                                    />
                                </div>

                            ) : ''}
                            <input onClick={handleCompleted} type="checkbox" />
                            <div className={s.text}>{todo.text}</div>
                        </div>
                        <div className={s.todo_time}>
                            <div className={s.priority}>{todo.sort}</div>
                            <div className={s.data}>{todo.data}</div>
                            <span onClick={() => deleteId(todo.id)} className={s.delete}>&times;</span>

                            {todo.id === todoEditing ? (
                                <img onClick={() => submitEdits(todo.id)} className={s.penIcon} src={penIcon} alt="penIcon" />
                            ) : (
                                <img onClick={() => setTodoEditing(todo.id)} className={s.penIcon} src={penIcon} alt="penIcon" />
                            )}

                        </div>

                    </li>)
            }
        </div>
    )
}


export default BlockTodo