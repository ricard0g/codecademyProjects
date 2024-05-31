import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: "cardsSlice",
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const {id} = action.payload;
            state.cards = {
                [id]: action.payload
            }
        }
    }
})

// Function Selectors
export const selectCards = (state) => state.cards.cards;

// Exports
export default cardsSlice.reducer;
export const {addCard} = cardsSlice.actions;