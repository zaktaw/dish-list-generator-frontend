import Dish from "./Dish"

const Dishes = ({dishes}) => {
    return (
        <div className="dishes">
        <h2>My dishes:</h2>
        {[...dishes].reverse().map((dish) =>
            <Dish dish={dish}/>
        )}
        </div>
    )
}

export default Dishes