const seatContainer = document.querySelector('.seats-container');
var seatsbooked = document.querySelector('.booked');
var seatsRemaining = document.querySelector('.remaining');
var booked = 0;
var totalSeat = 36;
for(var i = 0 ; i < totalSeat ; i++)
{
    let seats = document.createElement('div');
    seatContainer.appendChild(seats);
    seats.className = 'seats';
}
const seatSelector = document.querySelectorAll('.seats');
seatSelector.forEach(seat => {
    seat.addEventListener('click',()=> {
     
        if(seat.classList.contains('seat-booked'))
        {
            seat.classList.remove('seat-booked');
            booked -= 1;
            seatsbooked.textContent = `Seats Booked : ${booked}`;
            totalSeat += 1;
            seatsRemaining.textContent = `Seats Remaining : ${totalSeat}`;
        }
        else
        {
            seat.classList.add('seat-booked');
            booked += 1;
            seatsbooked.textContent = `Seats Booked : ${booked}`;
            totalSeat -= 1;
            seatsRemaining.textContent = `Seats Remaining : ${totalSeat}`;
        }
    })
})