import Logout from "./LoginRegister/Logout";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = ({ user, fSetUser }) => {
    return (
        <Container className="header">
            <div className="d-flex justify-content-center">
                <Row>
                    <Col><h1>Dish list generator</h1></Col>
                    <Col>{user ? <Logout user={user} fSetUser={fSetUser} /> : null}</Col>
                </Row>
            </div>
        </Container>
    )
}

export default Header;