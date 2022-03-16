import { React, useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import eventslist from '../data/eventslist.json';

export default function Countdown() {
    
    //get the timestamp from now to the future datetime
    function convertToMiSeconds(eventslist) { 
        let timeInMiSecond = Date.parse(eventslist['EndDate'] + ' ' + eventslist['EndTime']);
        return timeInMiSecond;
    }

    //give a new variable of time in milieconds to everyobject
    for (let i = 0; i < eventslist.length; i++) {
        let futureTime = convertToMiSeconds(eventslist[i]);
        eventslist[i].timeInMiSecond = futureTime;
    }

    let today = Date.now();
    const result = eventslist.filter(eventslist => eventslist.timeInMiSecond > today);

    //compare each object based on the miliseconds variable to get the most close event(smallest value)
    //Cite: https://stackoverflow.com/questions/8864430/compare-javascript-array-of-objects-to-get-min-max
    //The content before ? is the condition, the value after ? before : will be excuted if the value is true
    // the value after : will be returned if the value is false. FYI: the return value is a boolean value
    // Then the reduce function will based on the condition give the obeject from array.
    const closeTimeData = result.reduce(function (prev, curr) { //get single object
        return prev.timeInMiSecond < curr.timeInMiSecond ? prev : curr;
    });
   
  

    return (
        <div>
            <main>
                <div className="countdown__title">            
                        <h1>
                            countdown to event {closeTimeData['EndDate']}
                        </h1>
                </div>

                <div>
                    <CountdownTimer
                        timeInSeconds={closeTimeData['timeInMiSecond']}
                    />
                </div>
            </main>
        </div>
    );
}
