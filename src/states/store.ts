import { configureStore } from '@reduxjs/toolkit'
import pagesReducer from './pagesSlice'
import projectsReducer from './projectsSlice'
import languageReducer from './languageSlice'

export const store = configureStore({
  reducer: {
    pages: pagesReducer,
    projects: projectsReducer,
    language: languageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch