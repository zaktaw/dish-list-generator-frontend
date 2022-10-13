import Query from "./Query";
import Output from "./Output";
import utilityFunctions, { shuffle } from "../../Resources/utilityFunctions"

import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Generator = ({ user }) => {

    let queryKey = 0;
    function query(queryKey) {
        return <Query tags={getTags()} addQuery={addQuery} queryKey={queryKey} updateQueries={updateQueries} />
    }

    const [queryHandler] = useState({}); // queries performed. Example: {0: {tags: [], numberOfDishes: 0}}
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

        let queryHandlerSorted = sortByNumberOfTagsDescending(); // need to sort by number of tags so that more specific queries (queries with more tags) will be performed before less specific queries

        for (const query of queryHandlerSorted) {
            let dishes = getDishesMatchingQuery(query.tags, query.numberOfDishes);
            let queryObject = { "tags": query.tags, "dishes": dishes };
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
        let dishes = [];

        let userDishesShuffled = shuffle(user.dishes);

        for (const dish of userDishesShuffled) {

            let dishHasAllTagsFromQuery = true;
            for (const tag of tags) {
                if (!dish.tags.includes(tag)) {
                    dishHasAllTagsFromQuery = false;
                    break;
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
                        {output ? <Output output={output} /> : null}
                        <Button onClick={generateQueryOutput} variant="success">Generate</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Generator;