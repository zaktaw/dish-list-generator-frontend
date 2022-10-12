import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Col from 'react-bootstrap/Col';

const TagSelector = ({ tags, addTagSelector }) => {

    let initialDropdownButtonTitle = 'Add tag';

    const [dropdownButtonTitle, setDropdownButtonTitle] = useState(initialDropdownButtonTitle);

    function onClickHandler(e) {
       
        let tag = e.currentTarget.innerText;
        setDropdownButtonTitle(tag);
        
        if (dropdownButtonTitle == initialDropdownButtonTitle) {
            addTagSelector();
        }
    }

    return (
            <Col>
                <DropdownButton id="dropdown-item-button" title={dropdownButtonTitle}>
                    {Array.from(tags).map(tag => {
                        return <Dropdown.Item as="button" onClick={onClickHandler}>{tag}</Dropdown.Item>
                    })}
                </DropdownButton>
            </Col>
    )
}

export default TagSelector;