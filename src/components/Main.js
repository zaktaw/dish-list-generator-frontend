import { useState } from 'react'
import Dishes from './DishesList/Dishes'
import AddDish from './DishAdd/AddDish'
import Generator from './Generator/Generator'

const Main = (user) => {

    const [dishes, setDishes] = useState(user.user.dishes)
    const [showAddDish, setShowAddDish] = useState(false);
    const [showMyDishes, setShowMyDishes] = useState(false);

    function addDish(dish) {
        setDishes([...dishes, dish])
    }

    function removeDish(dishToBeRemoved) {
        setDishes(dishes.filter(dish => dish.id != dishToBeRemoved))
    }

    return (
        <div>
            <h2 className='mainHeader'>Generate dishes</h2>
            <Generator user={user.user} />
            <h2 className='mainHeader' onClick={() => setShowAddDish(!showAddDish)}>{showAddDish ? <p>Add dish ▲</p> : <p>Add dish ▼</p>}</h2>
            {showAddDish ? <AddDish addDish={addDish} userId={user.user.id}/> : null}
            <h2 className='mainHeader' onClick={() => setShowMyDishes(!showMyDishes)}>{showMyDishes ? <p>My dishes ▲</p> : <p>My dishes ▼</p>}</h2>
            {showMyDishes ? <Dishes dishes={dishes} removeDish={removeDish} userId={user.user.id} /> : null}
        </div>
    )
}

export default Main
