import dayjs from 'dayjs';


// get Remaining Time untils Ms Timestamp
export function getRemainingTime(TimestampMs) {

    //passing the time in miliseconds into dayjs function
    //then it will turn in to the format of Date(): ddd, MMM D, YYYY h:mm A 
    const endDay = dayjs(TimestampMs);
    //
    //from https://day.js.org/docs/en/display/format 
    //the dayjs is to get the current date in Date() format ddd, MMM D, YYYY h:mm A format
    //such as Tue Mar 15 2022 19:51:25 GMT-0700 (Pacific Daylight Time)
    const currentDay = dayjs();

    // the isBefore() function is used to check if a moment is before another moment in Date() format
    // if the date paratmeter is before the current date, it will return zero 
    // otherwise it will return the remaining time number
    if (endDay.isBefore(currentDay)) {
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00'
        }
    }

    //the function is used to get the difference in milliseconds of given dates future date and now on condition of days
    //Cite: https://www.geeksforgeeks.org/moment-js-moment-diff-function/
    function remainingDays(now, future) {
        const days = future.diff(now, 'days');
        return days;
    }

    //the function is used to get the difference in milliseconds of given dates future date and now on condition of hour
    function remainingHours(now, future) {
        const hours = future.diff(now, 'hours') % 24;
        return padWithZeros(hours, 2);
    }

    //the function is used to get the difference in milliseconds of given dates future date and now on condition of minutes
    function remainingMinutes(now, future) {
        const minutes = future.diff(now, 'minutes') % 60;
        return padWithZeros(minutes, 2);

    }

    //the function is used to get the difference in milliseconds of given dates future date and now on condition of seconds
    function remainingSeconds(now, future) {
        const seconds = future.diff(now, 'seconds') % 60;
        return padWithZeros(seconds, 2);
    }

    //http://developer.partnersoft.com/manuals/PartnerDevelopmentReferenceManual/javadoc/com/partnersoft/data/PadWithZeros.html
    //The padwithzero will be used to update the day/hour/minutes/seconds number in string type
    //the number will be returned normally if it has length in 2,
    //but it will return 0 if the number length for the time is less than 2
    //e.g. the number 10 will be return since it has length in 2
    //but it will be changed into 9 which has length in 1, the 0 will repeat 1 time and add 9 aside of 0.
    function padWithZeros(number, minLength) {
        const num = number.toString();
        if (num.length >= minLength) return num;
        console.log(number);
        let test = "0".repeat(minLength - num.length) + num
        return test;
    }

    return {
        seconds: remainingSeconds(currentDay, endDay),
        minutes: remainingMinutes(currentDay, endDay),
        hours: remainingHours(currentDay, endDay),
        days: remainingDays(currentDay, endDay)
    };

}

