import React, { useState } from 'react';
import PetList from './EventList';
import ComposeForm from './ComposeForm';
import { LocationList } from './LocationList';
import NavBar from './NavBar';
import Selection from './Type';

const LOCATION_LIST = [
    { "name": "Seattle" },
    { "name": "Shanghai" },
    { "name": "London" }
];

function App(props) {
    const [pets, setPets] = useState(props.pets);
    const [currentType, setCurrentType] = useState("Other");

    const handleSelect = (img) => {
        if (img == '') {
            img = "Other";
        }
        setCurrentType(img);
    }

    const addCard = (name, img) => {
        const newCard = {
            "name": name,
            "img": "/img/" + img + ".jpeg",
        }
        const newCardArray = [...pets, newCard];
        setPets(newCardArray);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div id="petList" className="col-9">
                        <PetList pets={pets} key={pets.id} />
                    </div>
                </div>
                <Selection whatType={currentType} typeCallBack={handleSelect} />
                <div>
                    <ComposeForm howToAddCard={addCard} whatType={currentType} />
                </div>

                <LocationList location={LOCATION_LIST} />
            </div>
            <footer className="container">
                <small>Images from <a href="http://www.seattlehumane.org/adoption/name">Seattle Humane Society</a></small>
            </footer>
        </div>
    );
}

export default App;