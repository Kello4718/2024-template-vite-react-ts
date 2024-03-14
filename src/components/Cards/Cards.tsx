import { List } from "antd";
import CounterWithCost from "../ui/CounterWithCost";
import { useGetCardsQuery } from "../../services/cards";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks";
import { useEffect } from "react";
import { updateCards } from "../../slices/cardsSlice";

const ImageStyled = styled.img`
    width: 150px;
    height: auto;
    object-fit: cover;
`;

const Cards = () => {
    const { data } = useGetCardsQuery("");
    const dispatch = useAppDispatch();
    useEffect(() => {
        data && dispatch(updateCards(data));
    }, [dispatch, data]);
    return (
        <div>
            <List
                itemLayout="vertical"
                dataSource={data ?? []}
                renderItem={(item) => (
                    <List.Item
                        key={item.id}
                        actions={[
                            <CounterWithCost id={item.id} price={item.price} />,
                        ]}
                    >
                        <ImageStyled
                            width={150}
                            height={200}
                            alt={item.title}
                            src={item.image}
                        />
                        <List.Item.Meta
                            title={item.title}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Cards;
