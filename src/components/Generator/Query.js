import TagSelector from "./TagSelector";

import { useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Query = ({ tags, addQuery, queryObject }) => {

    const tagSelector = <TagSelector tags={tags} addTagSelector={addTagSelector}/>;

    const [tagSelectors, setTagSelectors] = useState([tagSelector]);
    const [inputNumber, setInputNumber] = useState(0);
    const [disableAddQuery, setDisableAddQuery] = useState(false);

    function addTagSelector() {
        setTagSelectors(tagSelectors => [...tagSelectors, tagSelector]);
    }

    function handleOnChange(e) {
        const inputNumberChanged = Number(e.target.value);
        setInputNumber(inputNumberChanged);
        queryObject.numberOfDishes = inputNumberChanged;

        if (!disableAddQuery) {
            addQuery();
            setDisableAddQuery(true);
        }
    }

    return (
        <div className="query d-flex justify-content-start">
        <Row>
            {tagSelectors.map(tagSelector => {
                return tagSelector;
            })}
            <Col>
                <input type="number" value={inputNumber} min={0} onChange={handleOnChange}></input>
            </Col>
        </Row>
        </div>
    )
}

export default Query;