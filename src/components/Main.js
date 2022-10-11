import { useState } from 'react'
import Dishes from './Dishes'
import AddDish from './AddDish'

const Main = (user) => {

    const [dishes, setDishes] = useState(user.user.dishes)

    function addDish(dish) {
        setDishes([...dishes, dish])
    }

    return(
    <div>
        <AddDish addDish={addDish} userId={user.user.id}/>
        <h2>My dishes:</h2>
        {user.user.dishes ? <Dishes dishes={dishes}/> : <h3>No dishes added</h3>}
    </div>
)}

export default Main
