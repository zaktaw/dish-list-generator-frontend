import { useState } from 'react'
import Dishes from './DishesList/Dishes'
import AddDish from './DishAdd/AddDish'
import Generator from './Generator/Generator'

const Main = (user) => {

    const [dishes, setDishes] = useState(user.user.dishes)

    function addDish(dish) {
        setDishes([...dishes, dish])
    }

    function removeDish(dishToBeRemoved) {
        setDishes(dishes.filter(dish => dish.id != dishToBeRemoved))
    }

    return(
    <div>
        <Generator/>
        <AddDish addDish={addDish} userId={user.user.id}/>
        {user.user.dishes ? <Dishes dishes={dishes} removeDish={removeDish} userId={user.user.id}/> : <h3>No dishes added</h3>}
    </div>
)}

export default Main
