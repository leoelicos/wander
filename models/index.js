const Traveller = require('./Traveller');
const Location = require('./Location');
const Trips = require('./Trips');

Traveller.hasMany(Trips, {
	foreignKey: 'traveller_id',
	onDelete: 'SET NULL',
});

Trips.belongsTo(Traveller, {
	foreignKey: 'traveller_id',
});

Location.hasMany(Trips, {
	foreignKey: 'location_id',
	onDelete: 'CASCADE',
});

Trips.belongsTo(Location, {
	foreignKey: 'location_id',
});

module.exports = { Traveller, Location, Trips };
