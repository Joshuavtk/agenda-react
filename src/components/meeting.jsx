import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Meeting extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="meeting">
                <h3 className="week__name">
                    Meeting
                </h3>
                <div className="meeting__content">
                    {this.props.children}
                </div>
            </div>
        );
    }

}

export default Meeting;