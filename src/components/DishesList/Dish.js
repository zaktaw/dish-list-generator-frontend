import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import List from "./List"

const Dish = ({ dish }) => {
    return (
        <div className='dish'>
            <Container>
                <Row>
                    <h3>{dish.name}</h3>
                </Row>
                <Row>
                    <Col>
                        <List title={'Ingredients'} list={dish.ingredients} />
                    </Col>
                    <Col>
                        <List title={'Tags'} list={dish.tags} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dish