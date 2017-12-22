import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Meeting extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: ''
        };
    }

    showDescription() {
        if (this.state.content === "") {
            this.setState({content: this.props.details});
        } else {
            this.setState({content: ""});
        }
    }

    render() {
        const styles = {
            top: 90 + parseInt(this.props.time) / (2400 / 888)
        };

        return (
            <div className="meeting"
                style={styles}
                onClick={e => this.showDescription()}>
                <h3 className="meeting__name">
                    {this.props.name}
                </h3>
                <div className="meeting__content">
                    {this.state.content}
                </div>
            </div>
        );
    }

}

export default Meeting;