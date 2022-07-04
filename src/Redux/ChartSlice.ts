import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const initialState ={
    chart: [
    { name: "Landing Page", time: 7.4 },
    { name: "Configurator", time: 0.2 },
    { name: "Check-out", time: 7.0 },
    { name: "Deal", time: 3.8 },
]}

const timeCountSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
      updateChart: (state, action) => {
        state.chart = action.payload
      },
    }
})

export default  timeCountSlice.reducer
export const { updateChart } = timeCountSlice.actions
//(Math.random() *10).toFixed(1)
