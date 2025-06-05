const container = document.querySelector('.container');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const bookBtn = document.getElementById('bookBtn');

let ticketPrice = +movieSelect.value;

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedCount = selectedSeats.length;
    count.innerText = selectedCount;
    total.innerText = selectedCount * ticketPrice;
}

container.addEventListener('click', (e) => {
    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

bookBtn.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedCount = selectedSeats.length;

    if (selectedCount === 0) {
        alert("Please select at least one seat.");
        return;
    }
      const movieName = movieSelect.options[movieSelect.selectedIndex].text;
      ticketPrice = +movieSelect.value; // update here too, just in case
      const totalPrice = selectedCount * ticketPrice;

    const seatIndexes = [...selectedSeats].map(seat =>
        [...document.querySelectorAll('.row .seat')].indexOf(seat)
    );

    console.log("Booking confirmed!");
    console.log(`Seats Booked: ${selectedCount}`);
    console.log(`Total Price: ₹${selectedCount * ticketPrice}`);
    console.log(`Seat Indexes: ${seatIndexes}`);

    alert(`🎉 Booking Confirmed!\n\nMovie: ${movieName}\nSeats: ${selectedCount}\nTotal Price: ₹${totalPrice}`); 
});

document.getElementById("flightform").addEventListener("submit", function(event) {
    event.preventDefault();
    // Step 2: Define the booking function
    
      const from = document.getElementById("fromcity").value;
      const to = document.getElementById("tocity").value;
      const date = document.getElementById("flightDate").value;
      const passengers = document.getElementById("passengers").value;

      // Optional: check if inputs are filled
      if (!from || !to || !date || passengers <= 0) {
        alert("⚠️ Please fill all fields correctly.");
        return;
      }

      const pricePerPassenger = 4500;
      const total = pricePerPassenger * passengers;

      // Step 3: Display message in paragraph
      document.getElementById("flightSummary").innerText =
        `✅ Flight booked from ${from} to ${to} on ${date} for ${passengers} passenger(s). Total: ₹${total}`;

      // Step 4: Show popup
      alert(`🎉 Your flight has been booked!: ${from} to ${to} on ${date} for ${passengers} passenger(s). Total: ₹${total}` );
    }); 

    document.getElementById("hotelform").addEventListener("submit", function(event) {
    event.preventDefault();


  const city = document.getElementById("hotelcity").value;
  const checkin = new Date(document.getElementById("checkin").value);
  const checkout = new Date(document.getElementById("checkout").value);
  const guests = document.getElementById("guests").value;
  const roomType = document.getElementById("roomType").value;

    if (!city || !checkin || !checkout || guests <= 0 || !roomType) {
      alert("⚠️ Please fill all fields correctly.");
      return;
    }

    // 💰 Set price per night depending on hotel type
    let pricePerNight;
    switch (roomType) {
      case "Standard Room":
        pricePerNight = 1500;
        break;
      case "Deluxe Room":
        pricePerNight = 2500;
        break;
      
        case "Executive Room":
        pricePerNight = 3500;
        break;
        case "Suite":
        pricePerNight = 4000;
        break;
      default:
        pricePerNight = 2000;
    }

    // 📅 Calculate number of nights
    const start = new Date(checkin);
    const end = new Date(checkout);
    const diffTime = end - start;
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (nights <= 0) {
      alert("⚠️ Check-out must be after check-in.");
      return;
    }

    const total = pricePerNight * nights * guests;

    document.getElementById("hotelSummary").innerText =
      `🏨 Hotel booked in ${city} from ${checkin} to ${checkout} (${nights} night${nights > 1 ? 's' : ''}) for ${guests} guest(s) in a ${roomType} room. Total: ₹${total}`;

    alert( `🎉 Your hotel has been booked! : ${city} from ${checkin} to ${checkout} (${nights} night${nights > 1 ? 's' : ''}) for ${guests} guest(s) in a ${roomType} room. Total: ₹${total}`);
  });