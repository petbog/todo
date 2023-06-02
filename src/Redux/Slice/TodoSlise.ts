import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";


// type ParamsType = {
//     id: number,
//     text: string,
//     preority_id: number,
//     date: string,
//     sort: string
// }

// export const TodoFetch = createAsyncThunk(
//     'todo/TodoFetch',
//     async function (params:ParamsType) {
//         const {id,text,preority_id,date,sort } = params
//         const { data } = await axios.post<ItemType[]>(`https://test.ananievds.ru/note_add`,{id,text,preority_id,date,sort })
//         console.log(data)
//         return data as ItemType[]
//     }
// )
export const getTodo = createAsyncThunk(
    'todo/TodoFetch',
    async function () {
        const { data } = await axios.get(`https://test.ananievds.ru/notes_list`)
        console.log(data)
        return data as ItemType[]
    }
)


enum Status {
    Loading = 'loading',
    Succsess = 'success',
    Error = 'error',
}
export type ItemType = {
    id: number,
    text: string,
    preority_id: number,
    date: string,
    sort: string
}
type sortType = {
    name: string,
    priority: string
}

interface initialStateType {
    item: ItemType[],
    status: Status,
    sort: sortType

}


const initialState: initialStateType = {
    item: [],
    status: Status.Loading,
    sort: {
        name: 'Важно',
        priority: 'Важно'
    }
}

const TodoSlise = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<ItemType>) {
            state.item = [...state.item, action.payload]
        },
        activSortItem(state, action: PayloadAction<sortType>) {
            state.sort = action.payload
        },
        removeTodo(state, action: PayloadAction<ItemType>) {
            const { id } = action.payload;
            state.item = state.item.filter(item => item.id !== id)
        },
        todoEdit(state, action: PayloadAction<ItemType[]>) {
            state.item = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTodo.pending, (state) => {
            state.status = Status.Loading
        })
        builder.addCase(getTodo.fulfilled, (state, action) => {
            state.status =Status.Succsess
            state.item = action.payload

        })
        builder.addCase(getTodo.rejected, (state) => {
            state.status = Status.Error
        })
    }
    // extraReducers: {
    //     [SearchVideo.pending]: (state, action) => {
    //         state.status = 'loading'
    //     },
    //     [SearchVideo.fulfilled]: (state, action) => {
    //         state.status = 'success'
    //         state.item = action.payload

    //     },
    //     [SearchVideo.rejected]: (state, action) => {
    //         state.status = 'error'
    //     },
    // }
})

export const todoSelector = (state: RootState) => state.todo

export const { addTodo, activSortItem, removeTodo, todoEdit } = TodoSlise.actions
export default TodoSlise.reducer

