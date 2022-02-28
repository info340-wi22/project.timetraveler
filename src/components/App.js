import React , { useState } from 'react';
import PetList from './EventList';
import ComposeForm from './ComposeForm';

function App(props) {
    const [pets, setPets] = useState(props.pets);
  
    const addCard = (name, img) => {
      const newCard = {
        "name": name,
        "img": img
      }
      const newCardArray = [...pets, newCard];
      setPets(newCardArray);
    }

    return (
        <div>
            <main className="container">
            <div className="row">
                <div id="petList" className="col-9">
                <PetList pets={pets} key={pets.id}/>
                </div>
            </div>
            <div>
                <ComposeForm howToAddCard={addCard}/>
            </div>
            </main>
            <footer className="container">
            <small>Images from <a href="http://www.seattlehumane.org/adoption/name">Seattle Humane Society</a></small>
            </footer>
        </div>
        );
}

export default App;
