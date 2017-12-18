import React from 'react';
import Meeting from './meeting';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Day extends React.Component {

    constructor(props) {
        super(props);
    }
    ifWeekend(){
        if(this.props.weekend) {
            console.log('iets');
        }
    }
    
    renderMeeting(currentMeeting, i) {
        return (
            <Meeting
                key={i}
                name={currentMeeting.name}
                time={currentMeeting.time}
                details={currentMeeting.details}
            />
        );
    }

    render() {
        const meetings = this.props.meetings || [];

        return (
            <div className="day">
                <h2 className="day__name">
                    {this.props.name}
                </h2>
                {this.ifWeekend()}
                <div className="day__content">
                    {meetings.map(this.renderMeeting)}
                </div>
            </div>
        );
    }

}

export default Day;