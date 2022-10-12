import Query from "./Query";

import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Generator = ({ user }) => {

    let queryKey = 0;
    function query(queryKey) {
        return <Query tags={getTags()} addQuery={addQuery} queryKey={queryKey} updateQueries={updateQueries}/>
    }

   const [queryHandler, setQueryHandler] = useState({}); // stores all queries perfomred

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

    function generateDishList() {

        let queryResult = {}; // example: {0:, dishes: []}

        for (const key in queryHandler) {
            let query = queryHandler[key];
            let dishes = getDishesMatchingQuery(query.tags, query.numberOfDishes);
            queryResult[key] = dishes;
        }

        console.log("Query result");
        console.log(queryResult);
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