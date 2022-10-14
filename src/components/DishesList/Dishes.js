import Dish from "./Dish"

const Dishes = ({dishes, removeDish, userId, userPassword}) => {
    if (dishes.length == 0) return <p id="noDishesAdded">No dishes addeed</p>
    return (
        <div className="dishes">
        {[...dishes].reverse().map((dish) =>
            <Dish dish={dish} removeDish={removeDish} userId={userId} userPassword={userPassword} key={dish}/>
        )}
        </div>
    )
}

export default Dishes