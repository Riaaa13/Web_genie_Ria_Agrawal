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

if (!city || !checkin || !checkout || guests <= 0) {
    alert("⚠️ Please fill all hotel booking fields correctly.");
    return;
  }

  // Sample hotel data (can be dynamic)
  const hotels = {
    Goa: [
      { name: "Goa Grand Resort", type: "Standard Room", price: 1800 },
      { name: "Beachside Villa", type: "Suite", price: 4000 },
    ],
    Mumbai: [
      { name: "Mumbai Palace", type: "Deluxe Room", price: 3000 },
      { name: "City Hotel", type: "Executive Room", price: 3500 },
    ],
    Delhi: [
      { name: "Hotel Royale", type: "Standard Room", price: 1500 },
      { name: "Capital Residency", type: "Executive Room", price: 2800 },
    ],
    Bangalore: [
      { name: "Silicon Stay", type: "Deluxe Room", price: 2500 },
      { name: "Garden Inn", type: "Suite", price: 3800 },
    ],
  };

  const resultsDiv = document.getElementById("hotelResults");
  resultsDiv.innerHTML = `<h4>Available hotels in ${city} from ${checkin} to ${checkout}:</h4>`;

  const nights =
    (new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24);

  if (nights <= 0) {
    alert("⚠️ Check-out must be after check-in.");
    return;
  }

  hotels[city].forEach((hotel) => {
    const total = hotel.price * nights * guests;

    const hotelCard = document.createElement("div");
    hotelCard.style.border = "1px solid #ccc";
    hotelCard.style.padding = "10px";
    hotelCard.style.margin = "10px 0";
    hotelCard.style.borderRadius = "10px";

    hotelCard.innerHTML = `
      <h5>${hotel.name}</h5>
      <p>Room Type: ${hotel.type}</p>
      <p>Price per night: ₹${hotel.price}</p>
      <p>Total for ${nights} night(s): ₹${total}</p>
      <button onclick="alert('🎉 Hotel booked: ${hotel.name}')">Book Now</button>
    `;

    resultsDiv.appendChild(hotelCard);
  });
});
