import Dish from "./Dish"

const Dishes = ({dishes, removeDish, userId}) => {
    return (
        <div className="dishes">
        {[...dishes].reverse().map((dish) =>
            <Dish dish={dish} removeDish={removeDish} userId={userId} key={dish}/>
        )}
        </div>
    )
}

export default Dishes