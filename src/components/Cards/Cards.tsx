import { List } from "antd";
import { useGetCardsQuery } from "../../services/cards";
import { useAppDispatch } from "../../app/hooks";
import { useEffect } from "react";
import CardsItem from "./CardsItem";
import { updateCards } from "../../slices/cardsSlice";
import styled from "styled-components";

const StyledList = styled(List)`
    height: 100vh;
    overflow-y: scroll;
`;

const Cards = () => {
    const { data } = useGetCardsQuery("");
    const dispatch = useAppDispatch();
    useEffect(() => {
        data && dispatch(updateCards(data));
    }, [dispatch, data]);
    return (
        <div>
            <StyledList
                itemLayout="vertical"
                dataSource={data ?? []}
                renderItem={(item) => <CardsItem item={item} />}
            />
        </div>
    );
};

export default Cards;
