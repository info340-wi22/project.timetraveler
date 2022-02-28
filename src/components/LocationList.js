import React from 'react';
const LOCATION_LIST = [
    { "name": "Seattle" },
    { "name": "Shanghai" },
    { "name": "London" }
];

export function LocationList() {
    return (
        <div>
            <h1 className="subtitle">Saved Location Time</h1>
            {LOCATION_LIST.map((location) => {
                return <OneLocation location={location} key={location.name} />
            })}
        </div>
    );
}

function OneLocation(props) {
    let location = props.location.name;
    return (
        <div className="col-lg-6 col-md-12 d-flex py-4">
            <div className="location container">
                <div className="row">
                    <div className="col-md-12" >
                        <h2 className="location-name px-1" >{location}</h2>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="time1" > 7: 52 </div>
                        <p className="TUE1 mt-2" > TUE </p>
                    </div>
                    <div className="col-md-12 col-lg-6" >
                        <div className="time2" > 7: 52 </div>
                        <p className="TUE2 mt-2" > TUE </p>
                    </div>
                </div>
            </div>
        </div>
    );
}