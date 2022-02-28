import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
const DEFAULT_TYPE = ["Meeting", "SocialEvent", "Travel", "Lesson", "Other"]

export default function Selection(props) {

    const handleClick = (event) => {
        const whichType = event.currentTarget.name;
        props.typeCallBack(whichType);
    } 

    const userButtons = DEFAULT_TYPE.map((perType) => {

        return (
            <Dropdown.Item name={perType} key={perType} onClick={handleClick}>
                &nbsp; {perType}
            </Dropdown.Item>
        )
    });

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="secondary">
                    <p>Event Type</p>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {userButtons}
                </Dropdown.Menu>
            </Dropdown>        
      </div>
    )
};