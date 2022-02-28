import React from "react";
import CountdownTimer from './CountdownTimer';

export default function Countdowm(props) {

    return (
        <div>
            <main>
                <div className="until__title">
                    <h1>
                        countdown to 'a speacial day'
                    </h1>
                </div>

                <div>
                    <CountdownTimer
                        props={1646673800000}
                    />
                </div>
            </main>
        </div>
    );
}
