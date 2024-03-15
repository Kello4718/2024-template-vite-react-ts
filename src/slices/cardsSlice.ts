import { createSlice } from "@reduxjs/toolkit";
import { CardsInitialState } from "../types/cards";

const initialState: CardsInitialState = {
    cards: [],
    MAX_QUANTITY_ONE_GOOD: 10,
};

export const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        updateQuantity: (state, action) => {
            state.cards[action.payload.id].quantity = action.payload.quantity
        },
        updateCards: (state, action) => {
            state.cards = action.payload;
        },
    },
});

export const { updateQuantity, updateCards } = cardsSlice.actions;

export default cardsSlice.reducer;
