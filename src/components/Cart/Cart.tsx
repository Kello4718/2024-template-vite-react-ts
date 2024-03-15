import { Typography } from "antd";
import { useAppSelector } from "../../app/hooks";
import { formatCurrency } from "../../utils/utils";

import styles from "./Cart.module.css";

const { Text } = Typography;

const Cart = () => {
    const { cards, MAX_QUANTITY_ONE_GOOD } = useAppSelector(
        (state) => state.cards
    );
    const filteredCards = cards.filter((item) => item.quantity > 0);
    return (
        <section className={styles.Cart}>
            <h2 className={styles.CartTitle}>Корзина</h2>
            <ul className={styles.CartList}>
                {filteredCards.map((item) => (
                    <li className={styles.CartItem}>
                        You take{" "}
                        {
                            <span className={styles.CartItemText}>
                                {item.title}
                            </span>
                        }{" "}
                        in quantity of {item.quantity}{" "}
                        {item.quantity === 1 ? "good" : "goods"}
                        <span className={styles.CartItemPrice}>
                            Cost is:{" "}
                            {formatCurrency(item.price * item.quantity)}
                        </span>
                        {item.quantity === MAX_QUANTITY_ONE_GOOD && (
                            <span className={styles.CartItemWarning}>
                                Max quantity is {MAX_QUANTITY_ONE_GOOD}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Cart;
