export function getReservations() {
  const pullReservations = JSON.parse(localStorage.getItem("reservations"));

  return pullReservations;
}

export function createReservation(reservation) {
  console.log(reservation)
  let reservations;

  if (localStorage.getItem('reservations') === null) {
    reservations = [];
  } else {
    reservations = JSON.parse(localStorage.getItem('reservations'));
  }

  reservations.push(reservation);

  localStorage.setItem('reservations', JSON.stringify(reservations));
}

export function clearReservations() {
  localStorage.removeItem('reservations');
  window.location.reload();
}