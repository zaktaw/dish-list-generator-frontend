import { useState } from "react";
import { API_BASE_URL } from "../Resources/consts";

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

        console.log(dish);

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dish)
            }
    
            fetch(API_BASE_URL + '/' + userId, requestOptions)
                .then(async response => {
                    console.log(response)
                    if (response.status == 201) {
                        addDish(dish);
                        setName('');
                        setIngredients([]);
                        setTags([]);
                    }
                })
    }

    return(
    <div className="card">

    <h2 id="addDishHeader">Add dish</h2>

    <div className="addDish"> 
    <form>
        <div>
            <label>Name</label>
            <input type='text' value={name} onChange={changeName}></input>
        </div>
        <div>
            <label>Ingredient</label>
            <input type='text' onChange={changeIngredient} value={ingredient}></input>
            <button onClick={addIngredient}>Add ingredient</button>
        </div>
        <div>
            <label>Tag</label>
            <input type='text' onChange={changeTag} value={tag}></input>
            <button onClick={addTag}>Add tag</button>
        </div>
    </form>
    <div>
    <h5>Ingredients added</h5>
    <ul>
        {ingredients.map(ingredient => {
            return <li>{ingredient}</li>
        })}
    </ul>
    </div>
    <div>
    <h5>Tags added</h5>
    <ul>
        {tags.map(tag => {
            return <li>{tag}</li>
        })}
    </ul>
    </div>

    </div>

    <button id="btnSubmitDish" onClick={submitDish}>Submit dish</button>

    </div>
)}

export default AddDish;