import React from 'react';
import ReservationForm from './ReservationForm';
import { getReservations, clearReservations } from '../lib/reservation';

export default class Reservation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reservations: [],
    }

    this.handleClearReservations = this.handleClearReservations.bind(this);

  }

  componentDidMount() {
    let reservations = getReservations()
    return this.setState({ reservations })
  }

  handleClearReservations() {
    return clearReservations()
  }

  render() {


    return (
      <div className="container">
        <h1>Reservation</h1>
        <ReservationForm />
        <div className="reservation-list">
          {this.state.reservations && this.state.reservations.map(reservation => {
            return (
              <div>
                <p>{reservation.name}</p>
                <p>{reservation.phoneNumber}</p>
                <p>{reservation.time}</p>
              </div>
            )

          })}
        </div>
        <button onClick={this.handleClearReservations} name="clear">
          Clear Reservations
        </button>
      </div>
    )
  }
}