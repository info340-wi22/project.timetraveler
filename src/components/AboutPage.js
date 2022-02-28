import React from 'react';
import NavBar from './NavBar';


export default function AboutPage() {
    return (
        <div>
            <NavBar />
            <main>
                <div>
                    <img className="picture" src={"img/timetravel.jpg"} alt="timetravel-pic" />
                </div>
                <div className="text">
                    <section className="space">
                        <h1 className="center">About Us</h1>
                        <p>
                            Because of the outbreak of COVID-19, people all over the world have to stay at home to work and study. Remote/hybrid work is continuing and trending permanently. That means people located in different cities or countries gather together online. Our group finds that it is very time-consuming and error-prone to convert the time difference, which makes things, such as scheduling meeting time and figuring out deadlines of work, harder.
                        </p>
                        <p>
                            The key users of our application would be <em>students/employees</em> who need to keep track of different time zones. For example, international students who traveled from Asia to the United States. They want to keep in touch with their friends from their home countries; however, it is <strong>hard to keep track of two different time zones</strong> to find a good time to talk with each other. For some large companies, they have employees all over the world. Sometimes they need to schedule meetings with each other in different time zones.
                        </p>
                        <p>
                            Our application would allow users to create a list of time zones they choose to keep track of. More specifically, the users can create a list of time zones by selecting from a list of provided time zones. When the users want to schedule meetings with others, they can always see what the meeting time is in the other user's time zone. Thus, they can find a perfect time for meeting with each other.
                        </p>
                        <p>
                            Not only can users create a list of time zones they choose to keep track of, they can also add events to their “remind list.” More specifically, users can input information about an event such as
                        </p>
                        <ul>
                            <li>Event name</li>
                            <li>Your date and time</li>
                            <li>Priority type</li>
                        </ul>
                    </section>
                </div>
            </main>
        </div >
    );
}