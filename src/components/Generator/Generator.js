import Query from "./Query";
import Output from "./Output";

import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Generator = ({ user }) => {

    let queryKey = 0;
    function query(queryKey) {
        return <Query tags={getTags()} addQuery={addQuery} queryKey={queryKey} updateQueries={updateQueries}/>
    }

   const [queryHandler] = useState({}); // stores all queries perfomred
   const [output, setOutput] = useState(null)

    function updateQueries(queryKeyFromChild, updatedItem) {
        queryHandler[queryKeyFromChild] = updatedItem;
    }  

    const [querys, setQuerys] = useState([query(queryKey)]);

    function addQuery() {
        queryKey++;
        setQuerys(querys => [...querys, query(queryKey)]);
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

    function generateQueryOutput() {

        let output = []; // example: {0: {queryTags: [], dishes: []}}

        for (const key in queryHandler) {
            let query = queryHandler[key];
            let dishes = getDishesMatchingQuery(query.tags, query.numberOfDishes);
            let queryObject = {"tags": query.tags, "dishes": dishes};
            output.push(queryObject);
        }

        setOutput(output);
    }

    function getDishesMatchingQuery(tags, numberOfDishes) {
        let dishes = [];
     
        for (const dish of user.dishes) {
    
            let dishHasAllTagsFromQuery = true;
            for (const tag of tags) {
                if (!dish.tags.includes(tag)) {
                    dishHasAllTagsFromQuery = false;
                }
            }

            if (dishHasAllTagsFromQuery) {
                dishes.push(dish)
                if (dishes.length == numberOfDishes) break;
            }
        }

        return dishes;
    }

    return (
        <div className="generator">
            <h2>Generate dishes</h2>
            <Container>
                <Row>
                    <Col>
                {querys.map(query => {
                    return query
                })}

                </Col>

                <Col>
                    {output ? <Output output={output}/> : null}
                    <Button onClick={generateQueryOutput} variant="success">Generate</Button>
                </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Generator;