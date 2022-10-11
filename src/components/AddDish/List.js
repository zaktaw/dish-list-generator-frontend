import ListGroup from 'react-bootstrap/ListGroup';

const List = ({title, list}) => {

    return(
        <div>
            <h5>{title}</h5>
                <ListGroup>
                {list.map(listItem => {
                    return <ListGroup.Item>{listItem}</ListGroup.Item>
                })}
                 </ListGroup>
        </div>
    )
}

export default List;