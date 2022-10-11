import { useState } from 'react'
import Dishes from './DishesList/Dishes'
import AddDish from './DishAdd/AddDish'

const Main = (user) => {

    const [dishes, setDishes] = useState(user.user.dishes)

    function addDish(dish) {
        setDishes([...dishes, dish])
    }

    return(
    <div>
        <AddDish addDish={addDish} userId={user.user.id}/>
        {user.user.dishes ? <Dishes dishes={dishes}/> : <h3>No dishes added</h3>}
    </div>
)}

export default Main
