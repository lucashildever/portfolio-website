import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: {value: boolean} = {
    value: false,
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        }
    }
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer