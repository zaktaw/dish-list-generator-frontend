import Dish from "./Dish"

const Dishes = ({dishes}) => {
    return (
        <div>
        {dishes.map((dish) =>
            <Dish dish={dish}/>
        )}
        </div>
    )
}

export default Dishes