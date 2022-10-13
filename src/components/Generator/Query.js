import TagSelector from "./TagSelector";

import { useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Query = ({ tags, addQuery, queryKey, updateQueries, removeQuery }) => {

    let tagSelectorKey = 0;
    function tagSelector(tagSelectorKey) {
        return <TagSelector 
        tags={tags}
        addTagSelector={addTagSelector}
        tagSelectorKey={tagSelectorKey}
        updateSelectedTags={updateSelectedTags}
        />
    }

    const [tagSelectors, setTagSelectors] = useState([tagSelector(tagSelectorKey)]);
    const [inputNumber, setInputNumber] = useState(0);
    const [disableAddQuery, setDisableAddQuery] = useState(false);

    const [query] = useState({tags: [], numberOfDishes: 0});
    const [selectedTags] = useState({})

    function updateSelectedTags(tagSelectorKeyFromChild, tag) {
        selectedTags[tagSelectorKeyFromChild] = tag;

        let tags = [];
        for (const key in selectedTags) { // use for loop to transform object with key value pairs to flat array with tags
            tags.push(selectedTags[key]);
        }
       
        query.tags = tags;
        updateQueries(queryKey, query);
    }

    function addTagSelector() {
        tagSelectorKey++;
        setTagSelectors(tagSelectors => [...tagSelectors, tagSelector(tagSelectorKey)]);
    }

    function handleOnChangeInputNumber(e) {
        const inputNumberChanged = Number(e.target.value);
        setInputNumber(inputNumberChanged);

        query.numberOfDishes = inputNumberChanged;
        updateQueries(queryKey, query);
        console.log(disableAddQuery);
        if (!disableAddQuery) {
            addQuery();
            setDisableAddQuery(true);
        }
    }

    function handeOnChangeBtnDeleteQuery() {
        removeQuery(queryKey);
    }

    return (
        <div className="query d-flex justify-content-start">
        <Row>
            {tagSelectors.map(tagSelector => {
                return tagSelector;
            })}
            <Col>
                <input type="number" value={inputNumber} min={0} onChange={handleOnChangeInputNumber}></input>
            </Col>
        </Row>
        </div>
    )
}

export default Query;