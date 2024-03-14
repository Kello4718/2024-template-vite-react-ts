import { createSlice } from "@reduxjs/toolkit";
import { CardsInitialState } from "../types/cards";

const initialState: CardsInitialState = {
    cards: [],
};

export const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        updateQuantity: (state, action) =>
            (state.cards[action.payload.id].quantity = action.payload.quantity),
    },
});

export const { updateQuantity } = cardsSlice.actions;

export default cardsSlice.reducer;
