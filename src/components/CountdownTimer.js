import React, { useEffect, useState } from "react";
import {getRemainingTime} from './CountdownTimerUntils'


const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({timeInSeconds}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() =>{
            updateRemainingTime(timeInSeconds);
        }, 1000);
        return () => clearInterval(intervalId)
    }, [timeInSeconds])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTime(countdown));
    }

    return (
        <div className="countdown">
                    <div className="countdown__component">
                        <div className="countdown__numeric countdown__numeric--days">{remainingTime.days}</div>
                        <div className="countdown__unit">days</div>
                    </div>
                    <div className="countdown__component">
                        <div className="countdown__numeric countdown__numeric--hours">{remainingTime.hours}</div>
                        <div className="countdown__unit">hours</div>
                    </div>
                    <div className="countdown__component">
                        <div className="countdown__numeric countdown__numeric--minutes">{remainingTime.minutes}</div>
                        <div className="countdown__unit">minutes</div>
                    </div>
                    <div className="countdown__component">
                        <div className="countdown__numeric countdown__numeric--seconds">{remainingTime.seconds}</div>
                        <div className="countdown__unit">seconds</div>
                    </div>
                    <div className="countdown__event">It's Soon !!!</div>
        </div>
    );
}

export default CountdownTimer;