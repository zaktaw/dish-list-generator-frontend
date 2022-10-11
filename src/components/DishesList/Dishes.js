import Dish from "./Dish"

const Dishes = ({dishes}) => {
    return (
        <div>
        {[...dishes].reverse().map((dish) =>
            <Dish dish={dish}/>
        )}
        </div>
    )
}

export default Dishes