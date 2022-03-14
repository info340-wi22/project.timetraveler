import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams, Link} from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet } from 'firebase/database';
import CountdownTimer from './CountdownTimer';
import CloseEvent from './CloseEvent';

const eventslist = [
    {
        "StartDate": "04/05/2022",
        "StartTime": "07:52",
        "StartTimezone": "PST",
        "StartWeekDay": "TUE",
        "EndDate": "04/06/2022",
        "EndTime": "07:52",
        "EndTimezone": "PST",
        "EndWeekDay": "TUE",
        "EventType": "Try to do",
        "Description": "do/have ____ at ____ (e.g., Bacco Cafe)"
    },
    {
        "StartDate": "04/05/2022",
        "StartTime": "07:52",
        "StartTimezone": "PST",
        "StartWeekDay": "TUE",
        "EndDate": "04/06/2023",
        "EndTime": "07:00",
        "EndTimezone": "PST",
        "EndWeekDay": "TUE",
        "EventType": "Try to do",
        "Description": "do/have ____ at ____ (e.g., Bacco Cafe)"
    }
];

const eventlist = [
    {
        "StartDate": "04/05/2022",
        "StartTime": "07:52",
        "StartTimezone": "PST",
        "StartWeekDay": "TUE",
        "EndDate": "04/06/2022",
        "EndTime": "07:52",
        "EndTimezone": "PST",
        "EndWeekDay": "TUE",
        "EventType": "Try to do",
        "Description": "do/have ____ at ____ (e.g., Bacco Cafe)"
    },
]


export default function Countdown(props) {
    let eventslistTest = props.currentEventList;
    console.log(eventslistTest);
    
    // function giveId(eventslist) {
    //     let 
    // }

    //get the timestamp from now to the future datetime
    function convertToMiSeconds(eventslist) { 
        let timeInMiSecond = Date.parse(eventslist['EndDate'] + ' ' + eventslist['EndTime']);
        return timeInMiSecond;
    }

    //give a new variable of time in milieconds to everyobject
    for (let i = 0; i < eventslist.length; i++) {
        let futureTime = convertToMiSeconds(eventslist[i]);
        eventslist[i].timeInMiSecond = futureTime;
        eventslist[i].eventId = i+1;
    }
    console.log(eventslist);

    //compare each object based on the miliseconds variable to get the most close event
    const closeTimeData = eventslist.reduce(function (prev, curr) { //get single object
        return prev.timeInMiSecond < curr.timeInMiSecond ? prev : curr;
    });
    console.log(closeTimeData);




    return (
        <div>
             <CloseEvent data={closeTimeData} />  
             {/* Mock passing data */}
            <main>
                <div className="until__title">            
                        <h1>
                            countdown to event #{closeTimeData['eventId']}
                        </h1>
                </div>

                <div>

                    <CountdownTimer
                        timeInSeconds={closeTimeData['timeInMiSecond']}
                    />

                </div>
                <Link to={`/countdown/closeevent/${closeTimeData.eventId}`}>
                    <div className="until__event"> Click to Check More Details about This Event</div>
                </Link>
            </main>
        </div>
    );
}
