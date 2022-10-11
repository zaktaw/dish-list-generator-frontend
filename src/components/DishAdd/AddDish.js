import { useState } from "react";
import { API_BASE_URL } from "../../Resources/consts";

import List from "./List";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddDish = ({addDish, userId}) => {

    const [ingredients, setIngredients] = useState([])
    const [tags, setTags] = useState([])

    const [ingredient, setIngredient] = useState('')
    const [tag, setTag] = useState('')
    const [name, setName] = useState('')

   function changeName(e) {
        setName(e.currentTarget.value)
   }

    function changeIngredient(e) {
        setIngredient(e.currentTarget.value)
    }

    function addIngredient(e) {
        e.preventDefault(); // prevent browser from refreshing
        setIngredients([...ingredients, ingredient]);
        setIngredient('');
    }

    function changeTag(e) {
        setTag(e.currentTarget.value)
    }

    function addTag(e) {
        e.preventDefault(); // prevent browser from refreshing
        setTags([...tags, tag]);
        setTag('');
    }

    function submitDish() {
        const dish = {
            name: name,
            tags: tags,
            ingredients: ingredients
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dish)
            }
    
            fetch(API_BASE_URL + '/' + userId, requestOptions)
                .then(async response => {
                    console.log(response)
                    if (response.status == 201) {
                        let data = await response.json();
                        addDish(data); // need to use object provided in response to get access to id
                        setName('');
                        setIngredients([]);
                        setTags([]);
                    }
                })
    }

    const removeIngredient = (ingredientToBeRemoved) => {
        setIngredients(ingredients.filter(ingredient => ingredient != ingredientToBeRemoved))
    }

    const removeTag = (tagToBeRemoved) => {
        setTags(tags.filter(tag => tag != tagToBeRemoved))
    }
    

    return(
    <div class="addDish">

    <h2>Add dish</h2>

    <Container> 
    <Row>
    
    <Col xs={6}>
    <Form>
        <Form.Group className='w-25'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' value={name} onChange={changeName}></Form.Control>
        </Form.Group>
        <Form.Group className='w-25'>
            <Form.Label>Ingredient</Form.Label>
            <div className="d-flex">
                <Form.Control type='text' onChange={changeIngredient} value={ingredient}></Form.Control>
                <Button onClick={addIngredient}>+</Button>
            </div>
        </Form.Group>
        <Form.Group className='w-25'>
            <Form.Label>Tag</Form.Label>
            <div className="d-flex">
            <Form.Control type='text' onChange={changeTag} value={tag}></Form.Control>
            <Button onClick={addTag}>+</Button>
            </div>
        </Form.Group>
    </Form>
    <Button id="btnSubmitDish" onClick={submitDish} variant="success">Submit dish</Button>
    </Col>

    <Col>
        <List title={'Ingredients'} list={ingredients} removeListItem={removeIngredient}/>
    </Col>

    <Col>
        <List title={'Tags'} list={tags} removeListItem={removeTag}/>
    </Col>

    </Row>
    </Container>
        

    </div>
)}

export default AddDish;