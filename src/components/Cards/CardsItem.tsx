import { Col, Flex, List, Row, Typography } from "antd";
import { FC, useState } from "react";
import CounterWithCost from "../ui/CounterWithCost";
import styled from "styled-components";
import { Card } from "../../types/cards";
import { formatCurrency } from "../../utils/utils";
import { useAppSelector } from "../../app/hooks";

type CardsItemProps = {
    item: Card;
};

const StyledItemContent = styled.div`
    width: min(100%, 500px);
`;

const ImageStyled = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
`;

const { Text } = Typography;

const CardsItem: FC<CardsItemProps> = ({ item }) => {
    return (
        <List.Item key={item.id}>
            <StyledItemContent>
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
                <CounterWithCost id={item.id} price={item.price} />
            </StyledItemContent>
        </List.Item>
    );
};

export default CardsItem;
