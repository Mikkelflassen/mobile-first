// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Function to update status of static time slots
  function updateStaticTimeslots() {
    // Get the container for static time slots
    const timeslotsContainer = document
      .getElementById("booking-slots1")
      .querySelectorAll(".time-slot-available");
    // Retrieve booking data from localStorage or initialize if not exists
    const bookingData = JSON.parse(localStorage.getItem("bookingData")) || {};

    // Loop through each static time slot
    timeslotsContainer.forEach((slot) => {
      // Get the time of the time slot
      const time = slot.getAttribute("data-time");

      // Check if the time slot is booked
      if (bookingData[time]) {
        // Update class and content for booked time slot
        slot.classList.remove("time-slot-available");
        slot.classList.add("time-slot-not-available");
        slot.textContent = `${time} - Booked`;
      } else {
        // Update class and content for available time slot
        slot.classList.remove("time-slot-not-available");
        slot.classList.add("time-slot-available");
        slot.textContent = time;
      }
    });
  }

  // Initial update of static time slots
  updateStaticTimeslots();

  // Event listener for time slot clicks
  document.querySelectorAll(".time-slot-available").forEach((slot) => {
    slot.addEventListener("click", () => {
      const time = slot.getAttribute("data-time");
      const email = document.getElementById("email").value;

      if (email.trim() === "") {
        alert("Please enter your email before booking a time.");
        return;
      }

      const bookingData = JSON.parse(localStorage.getItem("bookingData")) || {};

      if (!bookingData[time]) {
        // Book the timeslot
        bookingData[time] = true;
      } else {
        // Unbook the timeslot
        delete bookingData[time];
      }

      // Save booking data to localStorage
      localStorage.setItem("bookingData", JSON.stringify(bookingData));

      // Update status of static time slots
      updateStaticTimeslots();

      // Set the booking time in the input field
      document.getElementById("booking_time").value = time;

      // Send booking details to EmailJS
      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
          time: time,
          email: email,
        })
        .then(
          function (response) {
            console.log("Success!", response);
          },
          function (error) {
            console.log("Failed!", error);
          }
        );

      alert(`Time slot ${time} has been booked.`);
    });
  });

  // Initialize and add the map
  let map;

  async function initMap() {
    // The location of the barber shops
    const position1 = { lat: 56.159395, lng: 10.209922 };
    const position2 = { lat: 56.159955, lng: 10.209942 };
    const position3 = { lat: 56.158915, lng: 10.209322 };
    const position4 = { lat: 56.158595, lng: 10.206012 };
    const position5 = { lat: 56.158315, lng: 10.209992 };
    const position6 = { lat: 56.157515, lng: 10.208992 };
    const position7 = { lat: 56.158515, lng: 10.209892 };
    const position8 = { lat: 56.157815, lng: 10.208792 };

    // Libraries request
    const { Map } = await google.maps.importLibrary("maps");

    // The map, centered in Aarhus
    map = new Map(document.getElementById("map"), {
      zoom: 15.5,
      center: position1,
      mapId: "DEMO_MAP_ID",
    });

    // Custom colors
    const greenIcon = {
      url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    };
    const redIcon = {
      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    };
    const yellowIcon = {
      url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
    };

    // Create more icons
    const exercise1 = new google.maps.Marker({
      position: position1,
      map: map,
      title: "Hairdresser 1",
      icon: greenIcon,
    });
    const exercise2 = new google.maps.Marker({
      position: position2,
      map: map,
      title: "Hairdresser 2",
      icon: redIcon,
    });
    const exercise3 = new google.maps.Marker({
      position: position3,
      map: map,
      title: "Hairdresser 3",
      icon: yellowIcon,
    });
    const exercise4 = new google.maps.Marker({
      position: position4,
      map: map,
      title: "Hairdresser 4",
      icon: greenIcon,
    });
    const exercise5 = new google.maps.Marker({
      position: position5,
      map: map,
      title: "Hairdresser 5",
      icon: yellowIcon,
    });
    const exercise6 = new google.maps.Marker({
      position: position6,
      map: map,
      title: "Hairdresser 6",
      icon: redIcon,
    });
    const exercise7 = new google.maps.Marker({
      position: position7,
      map: map,
      title: "Hairdresser 7",
      icon: redIcon,
    });
    const exercise8 = new google.maps.Marker({
      position: position8,
      map: map,
      title: "Hairdresser 8",
      icon: greenIcon,
    });

    // Add click event listener to the markers
    google.maps.event.addListener(exercise1, "click", () =>
      handleMarkerClick(exercise1)
    );
    google.maps.event.addListener(exercise2, "click", () =>
      handleMarkerClick(exercise2)
    );
    google.maps.event.addListener(exercise3, "click", () =>
      handleMarkerClick(exercise3)
    );
    google.maps.event.addListener(exercise4, "click", () =>
      handleMarkerClick(exercise4)
    );
    google.maps.event.addListener(exercise5, "click", () =>
      handleMarkerClick(exercise5)
    );
    google.maps.event.addListener(exercise6, "click", () =>
      handleMarkerClick(exercise6)
    );
    google.maps.event.addListener(exercise7, "click", () =>
      handleMarkerClick(exercise7)
    );
    google.maps.event.addListener(exercise8, "click", () =>
      handleMarkerClick(exercise8)
    );
  }

  // Function to handle marker click event
  function handleMarkerClick(exercise) {
    console.log("Marker clicked:", exercise.title);

    // Hide all hairdresser info containers
    const allHairdresserInfo = document.querySelectorAll(".hairdresser-info");
    allHairdresserInfo.forEach((info) => {
      info.style.display = "none";
    });

    // Get the hairdresser info container corresponding to the clicked marker
    const hairdresserInfo = document.getElementById(
      `hairdresser-info${exercise.title.split(" ")[1]}`
    );

    // Display the hairdresser info container
    hairdresserInfo.style.display = "block";
  }

  initMap();

  const btn = document.getElementById("button");

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_i6clavy";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        alert("Sent!");
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });
});
