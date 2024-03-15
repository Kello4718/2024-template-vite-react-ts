import { Col, Row } from "antd";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";

function App() {
    return (
        <Row>
            <Col span={18}>
                <Cards />
            </Col>
            <Col span={6}>
                <Cart />
            </Col>
        </Row>
    );
}

export default App;
