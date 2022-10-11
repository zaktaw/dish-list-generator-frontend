import ListGroup from 'react-bootstrap/ListGroup';

const List = ({title, list, removeListItem}) => {

    function onClickHandler(e) {
        const listItemToBeRemoved = e.target.innerText;
        removeListItem(listItemToBeRemoved);
    }

    return(
        <div>
            <h5>{title}</h5>
                <ListGroup>
                {list.map(listItem => {
                    return <ListGroup.Item action onClick={onClickHandler} key={listItem}>{listItem}</ListGroup.Item>
                })}
                 </ListGroup>
        </div>
    )
}

export default List;