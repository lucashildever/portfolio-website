import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: {value: string} = {
    value: 'home',
}

export const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    },
})

export const { setPage } = pagesSlice.actions
export default pagesSlice.reducer