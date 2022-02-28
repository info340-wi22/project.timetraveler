import React, { useState } from 'react';

export default function ComposeForm(props) {
    const [userInput, setUserInput] = useState(""); 

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setUserInput(inputValue);
    }

    const handleClick = (event) => {
        props.howToAddCard(userInput, props.whatType);
        setUserInput("");
    }

    return (
        <form className="my-2">
            <div className="input-group">
                <textarea
                    className="form-control" rows="2" placeholder="Type a new event information"
                    onChange={handleChange}
                    value={userInput}
                >
                </textarea>

                <button className="btn btn-secondary" type="button" onClick={handleClick}>
                    <span className="material-icons">publish</span>
                </button>
            </div>
        </form>
    );
}
