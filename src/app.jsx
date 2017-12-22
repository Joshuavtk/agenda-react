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
            { name: "Sunday" },
            {
                name: "Monday",
                meetings: [
                    { name: 'Going to the store', details: 'Don\'t forget the eggs', time: '1000' },
                    { name: 'To the movies', details: 'Don\'t forget money for the tickets', time: '1500' }
                ]
            },
            {
                name: "Tuesday",
                meetings: [
                    { name: 'Waking up', details: 'Set the alarm clock', time: '750' },
                    { name: 'Meeting', details: 'Meeting with Link Dichiara', time: '2300' }
                ]
            },
            {
                name: "Wednesday",
                meetings: [
                    { name: 'Meeting', details: 'Meeting with Joshua van \'t Kruis', time: '1200' }
                ]
            },
            {
                name: "Thursday",
                meetings: [
                    { name: 'Work', details: 'Finish the agenda task', time: '900' }
                ]
            },
            {
                name: "Friday",
                meetings: [
                    { name: 'Going to the store', details: 'Don\'t forget to buy a banana', time: '1400' },
                    { name: 'Learning', details: 'Finish the React Codecademy course', time: '1100' }
                ]
            },
            { name: "Saturday" }
        ];
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