import { createSlice } from "@reduxjs/toolkit";

type CityState = {
    city: string,
}

const initialState:CityState = {
    city: "Kyiv",
};

export const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        citySearch(state, action) {
            state.city = action.payload;
        } 
    }
})

export default citySlice.reducer;