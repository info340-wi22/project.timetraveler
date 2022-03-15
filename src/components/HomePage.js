import React, { useEffect, useState } from 'react';
// import DisplayedBlock from './DeleteOrDisplay';
import ComposeForm from './CreateBlock';
import { getDatabase, ref, /* set as firebaseSet */ push as firebasePush } from 'firebase/database';
import EventList from './EventList';
import { FilterSection } from './FilterSection';


function HomePage(props) {
    const db = getDatabase();
    const [cardsCopy, setCardsCopy] = useState([]);
    // const cardsCopy = [];
    function handleFilter(input) {
        let eventType = input.target.id;
        let cards = props.currentEventList;
        if (eventType !== 'ShowAllEvents') {
            cards = props.currentEventList.filter(
                (event) => event.EventType.split(' ').join('') === eventType
            );
        }
        setCardsCopy(cards);
        return (cards);
    }
    useEffect(() => {
        setCardsCopy(props.currentEventList);
    }, [props.currentEventList]); //Add props.currentEventList


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
        //add filter to check if there is a same descri already in the database
        //show error message 
        firebasePush(eventListRef, newCard)
            .then(() => props.setCurrentEventList([...props.currentEventList, newCard]))
            .then(() => console.log("pushed!"))
            .catch((err) => console.log(err));
    }

    if (props.eventListRef === "") {
        return (
            <div>
                <FilterSection
                    data={props.currentEventList}
                    handleFilter={handleFilter}
                />
                <ComposeForm howToAddCard={addCard}/>
            </div>
        );
    } else {
        return (
            <div>
                <div>
                    <FilterSection
                        data={props.currentEventList}
                        handleFilter={handleFilter}
                    />
                    <ComposeForm howToAddCard={addCard}/>
                </div>
                <div>
                <EventList events={cardsCopy}/>
                </div>
            </div>
        );
    }
}

export default HomePage;
