import { configureStore } from '@reduxjs/toolkit';
import FavouriteMeals_Reducer from './favouriteMeals';


export const mystore = configureStore({
    reducer:{
        FavouriteMeals : FavouriteMeals_Reducer,  
    },
});