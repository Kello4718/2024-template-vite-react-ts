import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Card } from "../types/cards";

export const cardsApi = createApi({
    reducerPath: "cardsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
    tagTypes: ["products"],
    endpoints: (builder) => ({
        getCards: builder.query<Card[], string>({
            query: () => `products`,
        }),
    }),
});

export const { useGetCardsQuery, useLazyGetCardsQuery } = cardsApi;