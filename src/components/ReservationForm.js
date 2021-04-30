import React from 'react';
import { createReservation } from '../lib/reservation';

export default function ReservationForm() {
  const [name, setName] = React.useState("")
  const [phoneNumber, setPhoneNumber] = React.useState("")
  const [time, setTime] = React.useState("")

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        createReservation({ name, phoneNumber, time });
      }}
      className="reservation-form"
    >
      <label>
        Name
        <input onChange={e => setName(e.target.value)} type="text" name="name" />
      </label>

      <label>
        Phone Number
        <input onChange={e => setPhoneNumber(e.target.value)} type="text" name="phone-number" />
      </label>

      <label>
        Time
        <input onChange={e => setTime(e.target.value)} type="time" name="time" />
      </label>

      <button className="form-button">
        Create
      </button>
    </form>
  )
}