import React from 'react';

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

    render() {
        return (
            <div className="day">
                <h2 className="day__name">
                    {this.props.name}
                </h2>
                {this.ifWeekend()}
                <div className="day__content">
                    <div className="">
                    </div>
                </div>
            </div>
        );
    }

}

export default Day;