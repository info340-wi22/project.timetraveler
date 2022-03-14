// import React, { useEffect, useState } from "react";
// import {getRemainingTime} from './CountdownTimerUntils.js'


// const defaultRemainingTime = {
//     seconds: '00',
//     minutes: '00',
//     hours: '00',
//     days: '00'
// }

// const CountdownTimer = ({timeInSeconds}) => {
//     const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

//     useEffect(() => {
//         const intervalId = setInterval(() =>{
//             updateRemainingTime(timeInSeconds);
//         }, 1000);
//         return () => clearInterval(intervalId)
//     }, [timeInSeconds])

//     function updateRemainingTime(countdown) {
//         setRemainingTime(getRemainingTime(countdown));
//     }

//     return (
//         <div className="until">
//                     <div className="until__component">
//                         <div className="until__numeric until__numeric--days">{remainingTime.days}</div>
//                         <div className="until__unit">days</div>
//                     </div>
//                     <div className="until__component">
//                         <div className="until__numeric until__numeric--hours">{remainingTime.hours}</div>
//                         <div className="until__unit">hours</div>
//                     </div>
//                     <div className="until__component">
//                         <div className="until__numeric until__numeric--minutes">{remainingTime.minutes}</div>
//                         <div className="until__unit">minutes</div>
//                     </div>
//                     <div className="until__component">
//                         <div className="until__numeric until__numeric--seconds">{remainingTime.seconds}</div>
//                         <div className="until__unit">seconds</div>
//                     </div>
//                     <div className="until__event">It's Soon !!!</div>
//         </div>
//     );
// }

// export default CountdownTimer;