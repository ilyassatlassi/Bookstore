import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Categories: [],
  };

const CategoriesSlice  = createSlice({
    name: "categorie",
    initialState,
    reducers: {
        checkStatus: ()=> {
            return "Under construction"
        }
    }

})
export const { checkStatus } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;