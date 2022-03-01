import React, { useState } from 'react';
import PetList from './EventList';
import ComposeForm from './ComposeForm';
import { LocationList } from './LocationList';
import Selection from './Type';

function HomePage(props) {
    const [pets, setPets] = useState(props.pets);
    const [currentType, setCurrentType] = useState("Other");

    const handleSelect = (img) => {
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
                <LocationList />
            </div>
        </div>
    );
}

export default HomePage;