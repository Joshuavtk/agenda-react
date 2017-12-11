import React from 'react';

import Agenda from './components/agenda';
import Day from './components/day';
import Meeting from './components/meeting';

import Button from './components/button';
import Dropdown from './components/dropdown';

/**
 * App component
 * @param props
 * @returns {XML}
 */
class App extends React.Component {

    constructor(props) {

        super(props);

        this.days = [
            { name: "Monday" },
            { name: "Tuesday" },
            { name: "Wednesday" },
            { name: "Thursday" },
            { name: "Friday" },
            {
                name: "Saturday",
                weekend: "true"
            },
            {
                name: "Sunday",
                weekend: "true"
            }
        ];

        this.state = {
            content: ''
        };

    }
    renderDay(currentDay, i) {
        return (
            <Day
                key={i}
                name={currentDay.name}
                weekend={currentDay.weekend}
            />
        );
    }


    render() {
        return (
            <Agenda>
                {this.days.map(this.renderDay)}
            </Agenda>
        );
    }

}

export default App;