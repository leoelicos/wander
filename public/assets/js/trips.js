/* 
trips.js
 
*/
let tripId;
let tripText;
let tripList;

tripList = document.querySelectorAll('.list-container .list-group');

// Show an element
const show = (elem) => {
	elem.style.display = 'inline';
};

// Hide an element
const hide = (elem) => {
	elem.style.display = 'none';
};

// activeTrip is used to keep track of the trip in the textarea
let activeTrip = {};

const getTrips = () =>
	fetch('/api/trips', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

// Render the list of trip ids
const renderTripList = async (trips) => {
	let jsonTrips = await trips.json();

	let tripListItems = [];

	const createLi = (text) => {
		const liEl = document.createElement('li');
		liEl.classList.add('list-group-item');

		const spanEl = document.createElement('span');
		spanEl.classList.add('list-item-id');
		spanEl.innerHTML = text;

		liEl.append(spanEl);

		return liEl;
	};

	if (jsonTrips.length === 0) {
		tripListItems.push(createLi('No saved Trips'));
	}

	jsonTrips.forEach((trip) => {
		const li = createLi(`<h2>Trip ${trip.id}:</h2><br/><b>Budget:</b> $${trip.trip_budget}<br />Traveller Amount: ${trip.traveller_amount}<br/><b>Traveller = ${trip.traveller_id}</b><br/><b>Location = ${JSON.stringify(trip.location_id)}</b><br>`);
		li.dataset.trip = JSON.stringify(trip);

		tripListItems.push(li);
	});

	tripListItems.forEach((trip) => tripList[0].append(trip));
};

// Gets trips from the db and renders them to the sidebar
const getAndRenderTrips = () => getTrips().then(renderTripList);

getAndRenderTrips();
