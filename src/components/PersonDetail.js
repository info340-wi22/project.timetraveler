import React from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

export default function PersonDetails(props) {
    const urlParam = useParams();
    let personName = urlParam.name;

    // find the person in data
    let thePerson =  _.find(props.personData, {Name: personName});

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">{thePerson.Name}</h1>
                <p className="card-text">{thePerson.Description}</p>
            </div>
        </div>
    )
}