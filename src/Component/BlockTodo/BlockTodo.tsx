import { useSelector } from 'react-redux'
import s from './BlockTodo.module.css'
import { ItemType, removeTodo, todoSelector } from '../../Redux/Slice/TodoSlise'
import penIcon from '../../img/icons8-ручка-100.png'
import { useState } from 'react'
import { useAppDispatch } from '../../Redux'



const BlockTodo: React.FC = () => {
    const { item } = useSelector(todoSelector)
    const dispatch = useAppDispatch()
    const [completed, SetCompleted] = useState(false)

    const handleCompleted = () => {
        SetCompleted(!completed)
    }
    const deleteId = (id:number) => {
        dispatch(removeTodo({ id } as ItemType))
    }

    return (
        <div className={s.block}>
            {
                item && item.map((todo, id) =>
                    <li className={s.todo_container} key={id}>
                        <div className={s.item}>
                            <input onClick={handleCompleted} type="checkbox" />
                            <div className={s.text}>{todo.text}</div>
                        </div>
                        <div className={s.todo_time}>
                            <div className={s.priority}>{todo.sort}</div>
                            <div className={s.data}>{todo.data}</div>
                            {/* <span onClick={() => { dispatch(removeTodo({ id } as ItemType)) }} className={s.delete}>&times;</span> */}
                            <span onClick={() => deleteId(todo.id)} className={s.delete}>&times;</span>
                            <img className={s.penIcon} src={penIcon} alt="penIcon" />
                        </div>

                    </li>)
            }
        </div>
    )
}


export default BlockTodo