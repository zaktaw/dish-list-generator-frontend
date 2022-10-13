import Query from "./Query";
import Output from "./Output";
import { shuffle } from "../../Resources/utilityFunctions"

import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Generator = ({ user }) => {

    let queryKey = 0; // uses queryKey to give each Query component a unique key to be used for udating queryHandler object with correct values
    function query(queryKey) {
        return <Query tags={getTags()} addQuery={addQuery} queryKey={queryKey} updateQueries={updateQueries} />
    }

    const [queryHandler, setQueryHandler] = useState({}); // queries performed. Example: {0: {tags: [], numberOfDishes: 0}}
    const [output, setOutput] = useState(null)

    function updateQueries(queryKeyFromChild, updatedItem) {
        queryHandler[queryKeyFromChild] = updatedItem;
    }

    const [querys, setQuerys] = useState([query(queryKey)]); // Query-components

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
        let queryHandlerSorted = sortByNumberOfTagsDescending(); // need to sort by number of tags so that more specific queries (queries with more tags) will be performed before less specific queries

        for (const query of queryHandlerSorted) {
            let dishes = getDishesMatchingQuery(query.tags, query.numberOfDishes);
            let queryObject = { "tags": query.tags, "dishes": dishes, "numberOfdishesRequested": query.numberOfDishes};
            output.push(queryObject);
        }

        setOutput(output);
    }

    function sortByNumberOfTagsDescending() {
        let queriesArray = Object.values(queryHandler)

        queriesArray = queriesArray.sort(function (a, b) {
            return b.tags.length - a.tags.length;
        })

        return queriesArray;
    }

    function getDishesMatchingQuery(tags, numberOfDishes) {

        let dishesMatchingQuery = [];

        let userDishesDuplicate = user.dishes.slice(); // make a shallow copy to retain the original array for future quries
        let userDishesShuffled = shuffle(userDishesDuplicate);

        for (const dish of userDishesShuffled) {

            if (dishesMatchingQuery.length == numberOfDishes) break;

            let dishHasAllTagsFromQuery = true;
            for (const tag of tags) {
                if (!dish.tags.includes(tag)) {
                    dishHasAllTagsFromQuery = false;
                    break;
                }
            }

            if (dishHasAllTagsFromQuery) {
                dishesMatchingQuery.push(dish)

                //remove item that was pushed from user dish list 
                const index = userDishesShuffled.indexOf(dish);
                userDishesShuffled.splice(index, 1);
            }
        }

        return dishesMatchingQuery;
    }

    return (
        <div className="generator">
            <Container>
                <Row>
                    <Col>
                        {querys.map(query => {
                            return query
                        })}

                    </Col>

                    <Col>
                        {output ? <Output output={output} /> : null}
                        <Button onClick={generateQueryOutput} variant="success" disabled={queryHandler && Object.keys(queryHandler).length === 0
                            && Object.getPrototypeOf(queryHandler) === Object.prototype}>Generate</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Generator;