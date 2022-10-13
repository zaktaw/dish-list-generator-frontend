const OutputItem = ({outputItem}) => {
    return(
        <div className="outputItem d-flex">
            {outputItem.tags.map((tag, index) => {
                return (index == 0) ? (<p>{tag}</p>) : (<p>, {tag}</p>) 
            })}
            <p id="outputItemSeperator">:</p>
            {outputItem.dishes.length == 0 ? <p>No dishes found matching these tags</p> : null}
            {outputItem.dishes.map((dish, index) => {
                return (index == 0) ? (<p>{dish.name}</p>) : (<p>, {dish.name}</p>) 
            })}
        </div>
    )
}

export default OutputItem;