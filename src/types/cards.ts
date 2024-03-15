type CardRating = {
    rate: number;
    count: number;
};

export type Card = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: CardRating;
    quantity: 1;
};

export type CardsInitialState = {
    cards: Card[];
    MAX_QUANTITY_ONE_GOOD: number;
};
