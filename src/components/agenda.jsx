import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Agenda extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="agenda">
                <h1 className="agenda__name">
                    Agenda
                </h1>
                <div className="agenda__content">
                    {this.props.children}
                </div>
            </div>
        );
    }

}

export default Agenda;