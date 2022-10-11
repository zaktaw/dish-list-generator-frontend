import Dish from "./Dish"

const Dishes = ({dishes, removeDish, userId}) => {
    return (
        <div className="dishes">
        <h2>My dishes:</h2>
        {[...dishes].reverse().map((dish) =>
            <Dish dish={dish} removeDish={removeDish} userId={userId}/>
        )}
        </div>
    )
}

export default Dishes