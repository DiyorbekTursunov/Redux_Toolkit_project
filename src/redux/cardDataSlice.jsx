import { createSlice } from "@reduxjs/toolkit";


export const CardDataSlice = createSlice({
    name:"MainData",
    initialState:{
        cards:null,
        isLoading:false,
        error: null,      
    },
    reducers: {
        getDataStart:(state) => {
            state.isLoading = true
        },
        getDataSucsess:(state , action)  => {
            state.isLoading = false
            state.cards = action.payload.products
        },
        getDataFail:(state , action)  => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const { getDataStart , getDataSucsess , getDataFail } = CardDataSlice.actions 
export default CardDataSlice.reducer