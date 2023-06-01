import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../Redux'
import { activSortItem, todoSelector } from '../../Redux/Slice/TodoSlise'
import s from './Priority.module.css'




const Priority: React.FC = () => {
    const dispatch = useAppDispatch()
    const{sort}=useSelector(todoSelector)

    type priorityType = {
        name: string,
        priority: string
    }
    const priority: priorityType[] = [
        { name: 'Важно', priority: 'Важно' },
        { name: 'Подождет', priority: 'Подождет' },
        { name: 'Возможно', priority: 'Возможно' },
    ];

    const ActiveSort = (item:priorityType) => {
        dispatch(activSortItem(item))
    }
    return (
        <div className={s.priority}>
            {
                priority.map((item, i) =>
                    <li
                        onClick={() => { ActiveSort(item) }}
                        className={`${s.priority_list} ${sort.priority === item.priority ?s.active :''}`}
                        key={i}>
                        {item.name}
                    </li>
                )
            }
        </div>
    )
}

export default Priority