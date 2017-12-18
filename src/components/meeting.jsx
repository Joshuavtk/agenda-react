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
        const styles = {
            top: parseInt(this.props.time)
        };

        return (
            <div className="meeting"
                style={styles}
                onClick={e => showDescription()}>
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