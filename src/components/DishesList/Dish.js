import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { API_BASE_URL } from '../../Resources/consts';

import List from "./List"

const Dish = ({ dish, removeDish, userId }) => {

    function onClickHandler() {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dish)
        }

        fetch(API_BASE_URL + '/removeDish/' + userId, requestOptions)
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