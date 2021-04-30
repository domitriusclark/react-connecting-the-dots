// Grab elements
const reservationForm = document.querySelector(".reservation-form");
const reservationList = document.querySelector(".reservation-list");
const clearButton = document.querySelector('[name="clear"]');
const nameInput = document.querySelector('[name="name"]');
const phoneNumberInput = document.querySelector('[name="phone-number"]');
const timeInput = document.querySelector('[name="time"]');


// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  const reservations = getReservations();

  reservations.map(reservation => {
    const reservationContainer = document.createElement("div");
    const name = document.createElement("p");
    const phoneNumber = document.createElement("p");
    const time = document.createElement("p");

    name.textContent += reservation.name;
    phoneNumber.textContent += reservation.phoneNumber;
    time.textContent += reservation.time;

    reservationContainer.append(name, phoneNumber, time);

    return reservationList.appendChild(reservationContainer);

  })
})

reservationForm.addEventListener('submit', (e) => {
  const formValues = {
    name: nameInput.value,
    phoneNumber: phoneNumberInput.value,
    time: timeInput.value
  }

  return createReservation(formValues)
});

clearButton.addEventListener('click', clearReservations)


// Functions
function getReservations() {
  const pullReservations = JSON.parse(localStorage.getItem("reservations"));

  return pullReservations;
}

function createReservation(reservation) {
  let reservations;

  if (localStorage.getItem('reservations') === null) {
    reservations = [];
  } else {
    reservations = JSON.parse(localStorage.getItem('reservations'));
  }

  reservations.push(reservation);

  localStorage.setItem('reservations', JSON.stringify(reservations));
}

function deleteReservation() {

}

function clearReservations() {
  localStorage.removeItem('reservations');
  window.location.reload();
}

function checkInGuest() {

}