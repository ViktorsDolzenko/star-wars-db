export class MockSwapiServices {

    _people = [
        {
            id: 1,
            name: 'Bilbo Baggins [TEST DATA]',
            gender: 'male',
            birthYear: 'long ago',
            eyeColor: 'dark brown'
        },

        {
            id: 2,
            name: 'Frodo Baggins [TEST DATA]',
            gender: 'female',
            birthYear: 'long ago',
            eyeColor: 'blonde'
        }
    ];

    _planets = [
        {
            id: 1,
            name: 'Earth [TEST DATA]',
            population: '7.530.000.000',
            rotationPeriod: '23 hours 56 seconds',
            diameter: '12.742 km',
            climate: 'rainy'
        },
        {
            id: 2,
            name: 'Venus [TEST DATA]',
            population: 'not known',
            rotationPeriod: '243 days',
            diameter: '12.104 km',
            climate: 'rainy'
        }
    ];

    _starships = [
        {
            id: 1,
            name: 'USS Enterprise [TEST DATA]',
            model: 'NCC-1701-C',
            manufacturer: 'Northrop Grumman Shipbuilding',
            cost: "10000000"
        }
    ];

    getAllPeople = async () => {
        return this._people;
    };

    getPerson = async () => {
        return this._people[0];
    };

    getAllPlanets = async () => {
        return this._planets;
    };

    getPlanet = async () => {
        return this._planets[0]
    };

    getAllShips = async () => {
        return this._starships;
    };

    getStarShip = async () => {
        return this._starships[0];
    };

    getPersonImg = () => {
        return `https://placeimg.com/400/500/people`
    };

    getStarShipImg = () => {
        return `https://placeimg.com/600/400/tech`;
    };

    getPlanetImg = () => {
        return `https://placeimg.com/400/400/nature`
    };
}
