import { useState } from 'react'
import s from './Home.module.css'
import { useAppDispatch } from '../../Redux'
import { addTodo, todoSelector } from '../../Redux/Slice/TodoSlise'
import { useSelector } from 'react-redux'

const Home = () => {
    const dispatch = useAppDispatch()
    const {item} =useSelector(todoSelector)
    const [text, setText] = useState('')
    const [todoItem, setTodoItem] = useState('')
    const [id, setId] = useState(1)


    const HandleClick = () => {
        setTodoItem(text)
        setText('')
        if(text){
            setId(id +1)
        }
       if(text && id ) {dispatch(addTodo({
            id:id,
            text:text,
            preority_id:2,
            data: new Date().toLocaleString()
        }))}
    }



    return (
        <div className={s.home}>
            <label className="">
                <input value={text} type="text" onChange={(e) => { setText(e.currentTarget.value) }} />
                <button onClick={HandleClick} >add todo</button>
            </label>
            <div className="">
                {
                    item.map((todo,id)=>
                        <div className="" key={id}>
                            {todo.text}
                            <p className=""> {todo.data}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Home