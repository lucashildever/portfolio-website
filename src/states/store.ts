import { configureStore } from '@reduxjs/toolkit'
import pagesReducer from './pagesSlice'
import projectsReducer from './projectsSlice'

export const store = configureStore({
  reducer: {
    pages: pagesReducer,
    projects: projectsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch