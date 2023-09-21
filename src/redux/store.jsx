import { configureStore } from "@reduxjs/toolkit";
import cardDataReducer from './cardDataSlice'
import CartigoryReducer from './CartigorySlice'
export default configureStore({
    reducer:{
        cardData: cardDataReducer ,
        catigory: CartigoryReducer ,
    }
})