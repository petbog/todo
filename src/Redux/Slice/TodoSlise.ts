import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";


// type ParamsType = {

// }

// export const TodoFetch = createAsyncThunk(
//     'search/SearchVideo',
//     async function (params:ParamsType) {
//         const { } = params
//         const { data } = await axios.get<ItemType[]>(``)
//         return data as ItemType[]
//     }
// )


enum Status {
    Loading = 'loading',
    Succsess = 'success',
    Error = 'error',
}
type ItemType = {
    id: number,
    text: string,
    preority_id: number,
    data:string
}

interface initialStateType {
    item: ItemType[],
    status: Status

}

const initialState: initialStateType = {
    item: [],
    status: Status.Loading,
}

const TodoSlise = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<ItemType>) {
            state.item.push(action.payload)
        },
        // getSearchValue(state, action: PayloadAction<string>) {
        //     state.searchValue = action.payload
        // },
        // setSortType(state, action: PayloadAction<SortType>) {
        //     state.sort = action.payload
        // },
        // setCountVideo(state, action: PayloadAction<number>) {
        //     state.countVideo = action.payload
        // }
    },
    extraReducers: (builder) => {
        // builder.addCase(TodoFetch.pending, (state) => {
        //     state.status = Status.Loading
        // })
        // builder.addCase(TodoFetch.fulfilled, (state, action) => {
        //     state.status =Status.Succsess
        //     state.item = action.payload

        // })
        // builder.addCase(TodoFetch.rejected, (state) => {
        //     state.status = Status.Error
        // })
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

export const { addTodo } = TodoSlise.actions
export default TodoSlise.reducer

