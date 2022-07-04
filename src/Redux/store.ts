import { configureStore } from '@reduxjs/toolkit';
import charactersReducer, { updateChart } from './ChartSlice'


const store = configureStore({
  reducer: {
    chart: charactersReducer,
  },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
