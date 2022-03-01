import React from 'react';

function PetCard(props) {
    let name = props.pet.name;
    let image = props.pet.img;

    return (
        <div className="card">
            <img className="card-img-top" src={image} alt={name} />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    )
}

export default function PetList(props) {
    let listPets = props.pets.map((pet, index) => {
        let eachCard = <PetCard pet={pet} key={index}/>
        return eachCard
    });

    return (
        <div>
            <h1 className="subtitle">Event List</h1>
            <div className="card-deck">
                {listPets}
            </div>
        </div> 
    )
};