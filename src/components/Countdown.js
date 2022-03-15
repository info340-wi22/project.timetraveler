import { React, useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';

export default function Countdown(props) {
    let eventslist = props.currentEventList;
    // console.log(eventlist);
    // const [eventslist, seteventslist] = useState([]);
    // console.log(eventslist);
    
    // useEffect(() => {
    //     seteventslist(eventlist);
    // }, [eventlist]); //Add props.currentEventList
    // console.log(eventslist);
    
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
    console.log(eventslist);

    let today = Date.now();
    const result = eventslist.filter(eventslist => eventslist.timeInMiSecond > today);
    console.log(result);

    //compare each object based on the miliseconds variable to get the most close event
    const closeTimeData = result.reduce(function (prev, curr) { //get single object
        return prev.timeInMiSecond < curr.timeInMiSecond ? prev : curr;
    });
    console.log(closeTimeData);
   
  

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
