import React, { useEffect, useState } from 'react';
// import DisplayedBlock from './DeleteOrDisplay';
import ComposeForm from './CreateBlock';
import { getDatabase, ref, set as firebaseSet } from 'firebase/database';
import EventList from './EventList';
import { FilterSection } from './FilterSection';


function HomePage(props) {
    const eventListRef = props.eventListRef;
    const [events, setEvents] = useState(props.currentEventList);

    //useEffect update firebase data
    useEffect(() => {
        firebaseSet(eventListRef, { events })
            .then(() => console.log("data saved successfully!"))
            .catch(err => console.log(err));
    })


    function handleFilter(input) {
        let eventType = input.target.id;
        let cardsCopy = events;
        console.log(cardsCopy);
        if (eventType !== 'ShowAllEvents') {
            cardsCopy = events.filter(
                (event) => event.EventType.split(' ').join('') === eventType
            );
        }
        console.log(cardsCopy);
        setEvents(cardsCopy);
    }

    const addCard = (StartDate, StartTime, StartTimezone, StartWeekDay, EndDate, EndTime, EndTimezone, EndWeekDay, EventType, Description) => {
        // if (events.length > 0) {
        //     let newId = events[events.length - 1].id + 1
        // }

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
        const newCardArray = [...events, newCard];
        setEvents(newCardArray);
    }
    if (events == "") {
        return (
            <div>
                <FilterSection
                    data={events}

                    handleFilter={handleFilter}
                />
                <ComposeForm howToAddCard={addCard} />
            </div>
        );
    } else {
        return (
            <div>
                <div>
                    <FilterSection
                        data={events}

                        handleFilter={handleFilter}
                    />
                    <ComposeForm howToAddCard={addCard} />
                </div>
                <div>
                    <EventList events={events} />
                </div>
            </div>
        );
    }
}

export default HomePage;

//howToRemoveCard={}