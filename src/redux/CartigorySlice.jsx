import { createSlice } from "@reduxjs/toolkit";

export const CatigorySlice = createSlice({
    name:'catigory',
    initialState:{
        catigory:'smartphones'
    },
    reducers:{
        getCatigory:(state , action) => {
            state.catigory = action.payload
        }
    }
})

export const {getCatigory} = CatigorySlice.actions
export default CatigorySlice.reducer