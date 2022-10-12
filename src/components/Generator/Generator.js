import Query from "./Query";

import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Generator = ({ user }) => {

    const query = <Query tags={getTags()} addQuery={addQuery}/>

    const [querys, setQuerys] = useState([query]);

    function addQuery() {
        setQuerys(querys => [...querys, query]);
    }

    function getTags() {
        let tags = new Set(); // using a set to avoid duplicate tags
        user.dishes.forEach(dish => {
            dish.tags.forEach(tag => {
                tags.add(tag);
            });
        });
        return tags;
    }

    function generateDishList() {
        querys.forEach(q => {
            console.log(q);
        })
    }

    return (
        <div className="generator">
            <h2>Generate dishes</h2>
            <Container>
                {querys.map(query => {
                    return query
                })}

                <Row>
                    <Button variant="success" onClick={generateDishList}>Generate</Button>
                </Row>
            </Container>

        </div>
    )
}

export default Generator;