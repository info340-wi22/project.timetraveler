import React from 'react';

export default function EventList(props) {
    console.log(props);
    let eventList = props.events.map((event) => {
        let eachEvent = <Event event={event} key={event.Description}/>;
        return eachEvent;
    })
    return (
        <div>
            {eventList}
        </div> 
    );
}

function Event(props) {
    const event = props.event;
    return (
        <div className="container margindesign">
            <div className="row col-12 eventTypeMarginDesign"> 
                <p className="eventType">{event.EventType}</p >
            </div>

            <div className="row">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="col-lg-6">
                            <div className="container">
                                <div className="row">
                                    <div className="d-flex">
                                        <div className="col-6 starttime">
                                            <div>{event.StartTime}</div> 
                                        </div>
                                        <div className="col-6">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col startdate eventMargin">
                                                        <div>{event.StartDate}</div> 
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col startweekday eventMargin">
                                                        <div>{event.StartWeekDay}</div> 
                                                    </div>
                                                    <div className="col starttimezone">
                                                        <div>{event.StartTimezone}</div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="d-flex">
                                        <div className="col-6 endtime">
                                            <div>{event.EndTime}</div> 
                                        </div>
                                        <div className="col-6">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col enddate eventMargin">
                                                        <div>{event.EndDate}</div> 
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col endweekday eventMargin">
                                                        <div>{event.EndWeekDay}</div> 
                                                    </div>
                                                    <div className="col endtimezone">
                                                        <div>{event.EndTimezone}</div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 input-txt static-txt">
                            <div>{event.Description}</div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

