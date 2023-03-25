import { createSlice } from "@reduxjs/toolkit";


const favouriteMeals_Slice = createSlice({
    name: 'favouriteMeals',
    initialState: [],
    reducers: {
        add_meal: (state, action) => {
            state.push(action.payload)
        },
        remove_meal: (state,action) =>{
           return state.filter((element)=> element.id !== action.payload.Id )
        }
    },

})
export const { add_meal  , remove_meal} = favouriteMeals_Slice.actions;

export default favouriteMeals_Slice.reducer;