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
                <h3 className="meeting__name">
                    {this.props.name}
                </h3>
                <div className="meeting__content">
                    {this.props.details}
                </div>
            </div>
        );
    }

}

export default Meeting;