import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, InputNumber, Typography } from "antd";
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateQuantity } from "../../slices/cardsSlice";

const { Text } = Typography;

type CounterWithCostProps = {
    price: number;
    id: number;
};

const CounterWithCost: FC<CounterWithCostProps> = ({ price, id }) => {
    const dispatch = useAppDispatch();

    const [quantity, setQuantity] = useState(0);
    const decrement = () => setQuantity(quantity - 1);
    const increment = () => {
        setQuantity(quantity + 1);
        dispatch(updateQuantity({id, quantity: quantity + 1}))
    };
    const { MAX_QUANTITY_ONE_GOOD } = useAppSelector((state) => state.cards);
    const onChange = (value: any) => setQuantity(value);
    return (
        <Flex gap="middle" align="center">
            <Flex gap="small" align="center">
                {quantity > 0 && (
                    <Button
                        size="small"
                        type="default"
                        shape="circle"
                        icon={<MinusOutlined />}
                        onClick={() => {
                            decrement();
                            dispatch(updateQuantity({ id, quantity }));
                        }}
                    />
                )}
                <InputNumber
                    placeholder="Enter quantity"
                    value={quantity}
                    onChange={onChange}
                    controls={false}
                    min={0}
                    max={10}
                />
                {quantity < MAX_QUANTITY_ONE_GOOD && (
                    <Button
                        size="small"
                        type="default"
                        shape="circle"
                        icon={<PlusOutlined />}
                        onClick={increment}
                    />
                )}
            </Flex>
            <Text strong italic>
                Price for item: {price} €
            </Text>
        </Flex>
    );
};

export default CounterWithCost;
