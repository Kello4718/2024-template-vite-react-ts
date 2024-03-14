import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Input, Typography } from "antd";
import { formatCurrency } from "../../utils/utils";
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateQuantity } from "../../slices/cardsSlice";

const { Text } = Typography;

type CounterWithCostProps = {
    price: number;
    id: number;
};

const CounterWithCost: FC<CounterWithCostProps> = ({ price, id }) => {
    const [quantity, setQuantity] = useState(1);
    const decrement = () => setQuantity(quantity - 1);
    const increment = () => setQuantity(quantity + 1);
    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
        evt.target.value;
    const dispatch = useAppDispatch();
    const { cards } = useAppSelector((state) => state);
    console.log(cards);
    return (
        <Flex gap="middle" align="center">
            <Flex gap="small" align="center">
                {quantity > 1 && (
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
                <Input
                    placeholder="Enter quantity"
                    value={quantity}
                    onChange={onChange}
                />
                {quantity < 10 && (
                    <Button
                        size="small"
                        type="default"
                        shape="circle"
                        icon={<PlusOutlined />}
                        onClick={increment}
                    />
                )}
            </Flex>
            <Text>Price for item: {price}</Text>
        </Flex>
    );
};

export default CounterWithCost;
