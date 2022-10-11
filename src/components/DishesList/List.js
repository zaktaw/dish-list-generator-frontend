import ListGroup from 'react-bootstrap/ListGroup';

const List = ({title, list}) => {
    return(
        <div className='dishesList'>
        <h5>{title}</h5>
        <ListGroup>
            {list.map(listItem => {
                return <ListGroup.Item key={listItem}>{listItem}</ListGroup.Item>
            })}
        </ListGroup>
        </div>
    )
}

export default List;