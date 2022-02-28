import React from 'react';

function PetCard(props) {
    let name = props.pet.name;
    let image = props.pet.img;

    return (
        <div className="card">
            <img className="card-img-top" src={image} alt={name} />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
            </div>
        </div>
    )
}

export default function PetList(props) {
    let listPets = props.pets.map((pet) => {
        let eachCard = <PetCard pet={pet} key={pet.name}/>
        return eachCard
    });

    return (
        <div>
            <h2>Event List</h2>
            <div className="card-deck">
                {listPets}
            </div>
        </div> 
    );
} 