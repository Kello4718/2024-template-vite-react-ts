import { Col, Row } from "antd";

import "./App.css";
import Cards from "./components/Cards/Cards";

function App() {
    return (
        <Row>
            <Col span={18}>
                <Cards />
            </Col>
            <Col span={6}>Итого: 123123 руб.</Col>
        </Row>
    );
}

export default App;
