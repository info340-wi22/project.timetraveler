import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import AddCircle from '@material-ui/icons/AddCircle';

const DEFAULT_TYPE = ["Try to Do", "Must Do"]

export default function ComposeForm(props) {
    const [currentType, setCurrentType] = useState("Try to Do");
    const [userTimeStartInput, setUserTimeStartInput] = useState("08:25");
    const [userTimeZoneStartInput, setUserTimeZoneStartInput] = useState("PST");
    const [userStartDateInput, setUserStartDateInput] = useState("2022-02-02");
    const [userStartWeekDayInput, setUserStartWeekDayInput] = useState("TUE");

    const [userTimeEndInput, setUserTimeEndInput] = useState("10:23");
    const [userTimeZoneEndInput, setUserTimeZoneEndInput] = useState("PST");
    const [userEndDateInput, setUserEndDateInput] = useState("2022-02-02");
    const [userEndWeekDayInput, setUserEndWeekDayInput] = useState("TUE");
    const [userDescriptionInput, setUserDescriptionInput] = useState("");

    const handelStartTime = (event) => {
        const startTimeInput = event.target.value;
        setUserTimeStartInput(startTimeInput);
    }

    const handelStartTimezone = (event) => {
        const startTimezoneInput = event.target.value;
        setUserTimeZoneStartInput(startTimezoneInput);
    }

    const handelEndTime = (event) => {
        const EndTimeInput = event.target.value;
        setUserTimeEndInput(EndTimeInput);
    }

    const handelEndTimezone = (event) => {
        const endTimezoneInput = event.target.value;
        setUserTimeZoneEndInput(endTimezoneInput);
    }

    const handelStartDate = (event) => {
        const startDateInput = event.target.value;
        setUserStartDateInput(startDateInput);
    }

    const handelEndDate = (event) => {
        const endDateInput = event.target.value;
        setUserEndDateInput(endDateInput);
    }

    const handelStartWeekDay = (event) => {
        const startWeekDay = event.target.value;
        setUserStartWeekDayInput(startWeekDay);
    }

    const handelEndWeekDay = (event) => {
        const endWeekDay = event.target.value;
        setUserEndWeekDayInput(endWeekDay);
    }

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setUserDescriptionInput(inputValue);
    }

    const handleClick = (event) => {
        console.log("click");
        props.howToAddCard( userStartDateInput, userTimeStartInput, userTimeZoneStartInput, userStartWeekDayInput, userEndDateInput, userTimeEndInput, userTimeZoneEndInput, userEndWeekDayInput, currentType, userDescriptionInput);
        setUserDescriptionInput("");
    }

    const handleType = (event) => {
        const whichType = event.currentTarget.name;
        setCurrentType(whichType);
    }

    const userButtons = DEFAULT_TYPE.map((perType) => {
        return (
            <Dropdown.Item name={perType} key={perType} onClick={handleType}>
                &nbsp; {perType}
            </Dropdown.Item>
        )
    });

    return (
        <div className="container margindesign">
            <div className="row col-12 eventTypeMarginDesign">
                <Dropdown className="type">
                    <Dropdown.Toggle>
                        {currentType}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {userButtons}
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="row">
                <div className="container">
                    <div className="d-flex">
                        <div className="col-lg-6">
                            <div className="container timeContainer">
                                <div className="row">
                                    <div className="d-flex">
                                        <div className="col-6">
                                            <input className="starttime" type="time" onChange={handelStartTime} value={userTimeStartInput} />
                                        </div>
                                        <div className="col-6">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col startdateCol">
                                                        <input type="date" className="startdate" onChange={handelStartDate} value={userStartDateInput} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col width48 startweekdayCol">
                                                        <input type="text" className="width90 startweekday" onChange={handelStartWeekDay} value={userStartWeekDayInput} />
                                                    </div>
                                                    <div className="col width48 starttimezoneCol">
                                                        <input className="width90 starttimezone" type="text" onChange={handelStartTimezone} value={userTimeZoneStartInput} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-flex">
                                        <div className="col-6">
                                            <input className="endtime" type="time" onChange={handelEndTime} value={userTimeEndInput} />
                                        </div>
                                        <div className="col-6">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col enddateCol">
                                                        <input type="date" className="enddate" onChange={handelEndDate} value={userEndDateInput} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col width48 endweekdayCol">
                                                        <input type="text" className="width90 endweekday" onChange={handelEndWeekDay} value={userEndWeekDayInput} />
                                                    </div>
                                                    <div className="col width48 endtimezoneCol">
                                                        <input className="width90 endtimezone" type="text" onChange={handelEndTimezone} value={userTimeZoneEndInput} />
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
                                    <div className="col-11">
                                        <form>
                                            <textarea className="form-control input-txt" rows="7" placeholder="Have breakfast with friends Location: Bacco Cafe"
                                
                                                onChange={handleChange}
                                                value={userDescriptionInput}></textarea>
                                        </form>
                                    </div>
                                    <div className="col-1 d-flex flex-column-reverse">
                                        <button className="btn" type="button" onClick={handleClick}>
                                            <AddCircle />
                                        </button>
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

  // style={{background-color:#355C7D}}


