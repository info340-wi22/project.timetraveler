import React from 'react';


const event = {
        "StartDate": "04/05/2022",
        "StartTime": "07:52",
        "StartTimezone": "PST",
        "StartWeekDay": "TUE",
        "EndDate": "04/06/2022",
        "EndTime": "07:52",
        "EndTimezone": "PST",
        "EndWeekDay": "TUE",
        "EventType": "Try to do",
        "Description": "do/have ____ at ____ (e.g., Bacco Cafe)"
    }

export default function CloseEvent(props) {
    console.log(props);
    // let event = props.data;
    console.log(event);
    // const { closeEventId } = useParams();

    return (
        <div>
            <div className="close_event_info">
                <h2> Closest Event Information  </h2>
            </div>

            <div className="container margindesign">
                <div className="row col-12 eventTypeMarginDesign">
                    <p className="eventType">{event['EventType']}</p >
                </div>

                <div className="row">
                    <div className="container">
                        <div className="d-flex flex-wrap">
                            <div className="col-lg-6">
                                <div className="container timeContainer">
                                    <div className="row">
                                        <div className="d-flex">
                                            <div className="col-6">
                                                <div>{event.StartTime}</div>
                                            </div>
                                            <div className="col-6">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col startdateCol">
                                                            <div>{event.StartDate}</div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col width47 startweekdayCol">
                                                            <div>{event.StartWeekDay}</div>
                                                        </div>
                                                        <div className="col width47 starttimezoneCol">
                                                            <div>{event.StartTimezone}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="d-flex">
                                            <div className="col-6">
                                                <div>{event.EndTime}</div>
                                            </div>
                                            <div className="col-6">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col enddateCol">
                                                            <div>{event.EndDate}</div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col width47 endweekdayCol">
                                                            <div>{event.EndWeekDay}</div>
                                                        </div>
                                                        <div className="col width47 endtimezoneCol">
                                                            <div>{event.EndTimezone}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div>{event.Description}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}