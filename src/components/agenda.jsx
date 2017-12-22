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
                    <div className="agenda__time">
                        <h2>Time:</h2>
                        <p>0:00</p>
                        <p>1:00</p>
                        <p>2:00</p>
                        <p>3:00</p>
                        <p>4:00</p>
                        <p>5:00</p>
                        <p>6:00</p>
                        <p>7:00</p>
                        <p>8:00</p>
                        <p>9:00</p>
                        <p>10:00</p>
                        <p>11:00</p>
                        <p>12:00</p>
                        <p>13:00</p>
                        <p>14:00</p>
                        <p>15:00</p>
                        <p>16:00</p>
                        <p>17:00</p>
                        <p>18:00</p>
                        <p>19:00</p>
                        <p>20:00</p>
                        <p>21:00</p>
                        <p>22:00</p>
                        <p>23:00</p>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }

}

export default Agenda;