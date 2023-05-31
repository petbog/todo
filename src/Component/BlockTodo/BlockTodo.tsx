import { useSelector } from 'react-redux'
import s from './BlockTodo.module.css'
import { todoSelector } from '../../Redux/Slice/TodoSlise'
import penIcon from '../../img/icons8-ручка-100.png'



const BlockTodo: React.FC = () => {
    const { item } = useSelector(todoSelector)

    return (
        <div className={s.block}>
            {
                item.map((todo, id) =>
                    <li className={s.todo_container} key={id}>
                        <div className={s.item}>
                            <input type="checkbox" checked={todo.completed} />
                            <div className={s.text}>{todo.text}</div>
                        </div>
                        <div className={s.todo_time}>
                            <div className={s.data}>{todo.data}</div>
                            <span className={s.delete}>&times;</span>
                            <img className={s.penIcon} src={penIcon} alt="penIcon" />
                        </div>

                    </li>)
            }
        </div>
    )
}


export default BlockTodo