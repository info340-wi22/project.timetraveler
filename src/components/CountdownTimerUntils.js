// import dayjs from 'dayjs';


// // get Remaining Time untils Ms Timestamp
// export function getRemainingTime(TimestampMs) {
//     const timestampDayjs = dayjs(TimestampMs);
//     const nowDaysjs = dayjs();
//     if (timestampDayjs.isBefore(nowDaysjs)) {
//         return {
//             seconds: '00',
//             minutes: '00',
//             hours: '00',
//             days: '00'
//         }
//     }
//     return {
//         seconds: getRemainingSeconds(nowDaysjs, timestampDayjs),
//         minutes: getRemainingMinutes(nowDaysjs, timestampDayjs),
//         hours: getRemainingHours(nowDaysjs, timestampDayjs),
//         days: getRemainingDays(nowDaysjs, timestampDayjs)
//     };

// }

// function getRemainingSeconds(nowDaysjs, timestampDayjs) {
//     const seconds = timestampDayjs.diff(nowDaysjs, 'seconds') % 60;
//     return padWithZeros(seconds, 2);
// }

// function getRemainingMinutes(nowDaysjs, timestampDayjs) {
//     const minutes = timestampDayjs.diff(nowDaysjs, 'minutes') % 60;
//     return padWithZeros(minutes, 2);

// }

// function getRemainingHours(nowDaysjs, timestampDayjs) {
//     const hours = timestampDayjs.diff(nowDaysjs, 'hours') % 24;
//     return padWithZeros(hours, 2);
// }

// function getRemainingDays(nowDaysjs, timestampDayjs) {
//     const days = timestampDayjs.diff(nowDaysjs, 'days');
//     return days.toString();
// }

// function padWithZeros(number, minLength) {
//     const numberString = number.toString();
//     if (numberString.length >= minLength) return numberString;
//     return "0".repeat(minLength - numberString.length) + numberString;
// }