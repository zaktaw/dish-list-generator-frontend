const Dish = ({dish}) => {
    return(
    <div className="card dish">
        <h3>{dish.name}</h3>
        <h4>Tags</h4>
        <ul>
            {dish.tags.map(tag => {
                return <li>{tag}</li>
            })}
        </ul>
        <h4>ingredients</h4>
        <ul>
            {dish.ingredients.map(ingredient => {
                return <li>{ingredient}</li>
            })}
        </ul>
    </div>
)}

export default Dish