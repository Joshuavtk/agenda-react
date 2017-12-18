import React from 'react';

import Agenda from './components/agenda';
import Day from './components/day';

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
            {
                name: "Sunday",
                weekend: "true",
                meetings: [
                    { name: 'Going to the store', details: 'Details meeting 1', time: '10:00' }
                ]
            },
            {
                name: "Monday",
                meetings: [
                    { name: 'To the movies', details: 'Details meeting 1', time: '12:00' }
                ]
            },
            {
                name: "Tuesday",
                meetings: [
                    { name: 'firstMeeting', details: 'Details meeting 1', time: '12:00' }
                ]
            },
            {
                name: "Wednesday",
                meetings: [
                    { name: 'firstMeeting', details: 'Details meeting 1', time: '12:00' }
                ]
            },
            {
                name: "Thursday",
                meetings: [
                    { name: 'firstMeeting', details: 'Details meeting 1', time: '12:00' }
                ]
            },
            {
                name: "Friday",
                meetings: [
                    { name: 'firstMeeting', details: 'Details meeting 1', time: '12:00' }
                ]
            },
            {
                name: "Saturday",
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
                meetings={currentDay.meetings}

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