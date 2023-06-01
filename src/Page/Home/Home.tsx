import { useState, } from 'react'
import s from './Home.module.css'
import { useAppDispatch } from '../../Redux'
import { addTodo, todoSelector } from '../../Redux/Slice/TodoSlise'
import deleteString from '../../img/icons8-крестик-78.png'
import penIcon from '../../img/icons8-ручка-100.png'
import BlockTodo from '../../Component/BlockTodo/BlockTodo'
import { useSelector } from 'react-redux'
import Priority from '../../Component/Priority/Priority'

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const { sort } = useSelector(todoSelector)
    const [text, setText] = useState('')
    const [todoItem, setTodoItem] = useState('')
    const [id, setId] = useState(2)


    const HandleClick = () => {
        setTodoItem(text)
        setText('')
        if (text) {
            setId(Math.floor(Math.random() * 10000))
        }
        if (text && id) {
            dispatch(addTodo({
                id: id,
                text: text,
                preority_id: 2,
                data: new Date().toLocaleString(),
                completed: false,
                sort:sort.priority
            }))
        }
    }


    const deleteTextInput = () => {
        setText('')
    }


    return (
        <div className={s.home}>
            <label className={s.home_label}>
                <img className={s.penIcon} src={penIcon} alt="penIcon" />
                <input className={s.home_input} value={text} type="text" onChange={(e) => { setText(e.currentTarget.value) }} />
                {
                    text ? <img onClick={deleteTextInput} className={s.deleteString} src={deleteString} alt="deleteString" /> : ''
                }
                <button className={s.home_button} onClick={HandleClick} >add todo</button>
            </label>
                <Priority />
            <div className={s.block_container}>
                <BlockTodo />
            </div>
        </div>
    )
}

export default Home