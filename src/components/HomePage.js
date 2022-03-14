// import React, { useEffect, useState } from 'react';
// import DisplayedBlock from './DeleteOrDisplay';
import ComposeForm from './CreateBlock';
import { getDatabase, ref, /* set as firebaseSet */ push as firebasePush} from 'firebase/database';
import EventList from './EventList';
import { useReducer } from 'react';
// import { FilterSection } from './FilterSection';


function HomePage(props) {
    const db = getDatabase();
    // const [events, setEvents] = useState(props.currentEventList);

    // function handleFilter(input) {
    //     let eventType = input.target.id;
    //     let cardsCopy = events;
    //     console.log(cardsCopy);
    //     if (eventType !== 'ShowAllEvents') {
    //         cardsCopy = events.filter(
    //             (event) => event.EventType.split(' ').join('') === eventType
    //         );
    //     }
    //     console.log(cardsCopy);
    //     setEvents(cardsCopy);
    // }

    const addCard = (StartDate, StartTime, StartTimezone, StartWeekDay, EndDate, EndTime, EndTimezone, EndWeekDay, EventType, Description) => {
        let newCard = {
            "StartDate": StartDate,
            "StartTime": StartTime,
            "StartTimezone": StartTimezone,
            "StartWeekDay": StartWeekDay,
            "EndDate": EndDate,
            "EndTime": EndTime,
            "EndTimezone": EndTimezone,
            "EndWeekDay": EndWeekDay,
            "EventType": EventType,
            "Description": Description,
        } 
        const eventListRef = ref(db, "eventList/" + props.currentUser.uid);
        firebasePush(eventListRef, newCard)
        .then(() => console.log("pushed!"))
        .catch((err) => console.log(err));  
        // const newCardArray = [...events, newCard];
        // setEvents(newCardArray);
    }

    if (props.eventListRef  == "") {
        return (
            <div>
                {/* <FilterSection
                    data={events}

                    handleFilter={handleFilter}
                /> */}
                <ComposeForm howToAddCard={addCard} />
            </div>
        );
    } else {
        return (
            <div>
                <div>
                    {/* <FilterSection
                        data={events}

                        handleFilter={handleFilter}
                    /> */}
                    <ComposeForm howToAddCard={addCard} />
                </div>
                <div>
                    <EventList events={props.currentEventList} />
                </div>
            </div>
        );
    }
}

export default HomePage;

//howToRemoveCard={}