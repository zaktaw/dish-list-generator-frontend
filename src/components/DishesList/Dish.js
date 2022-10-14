import { removeDishRequest } from '../../apiRequests';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import List from "./List"

const Dish = ({ dish, removeDish, userId, userPassword }) => {

    function onClickHandler() {
        removeDishRequest(userId, userPassword, dish)
            .then(async response => {
                if (response.status == 200) {
                    removeDish(dish.id);
                }
            })
    }

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
                <Row>
                    <Button variant='danger' onClick={onClickHandler}>Delete dish</Button>
                </Row>
            </Container>
        </div>
    )
}

export default Dish