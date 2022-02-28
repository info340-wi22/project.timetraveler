import React, { useState } from 'react';
import PetList from './EventList';
import ComposeForm from './ComposeForm';
import { LocationList } from './LocationList';
import Selection from './Type';


const LOCATION_LIST = [
    { "name": "Seattle" },
    { "name": "Shanghai" },
    { "name": "London" }
];

function HomePage(props) {
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
        </div>
    );
}

export default HomePage;