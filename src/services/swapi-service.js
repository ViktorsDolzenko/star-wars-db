
export class SwapiService {

    _apiBase = `https://swapi.dev/api/`;

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        const body = await res.json();
        return body;

    }

    getAllPeople = async () => {
        const res = await this.getResource(`people/`);
        return res.results.map(this._transformPerson).slice(0,5);
    }

    getPerson = async (id) => {
        const person = await this.getResource(`people/${id}/`);
        return this._transformPerson(person);
    }

    getPersonImg = (id) => {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`planets/`);
        return res.results.map(this._transformPlanet).slice(0,5);
    }

    getPlanet = async (id) => {
      const planet = await this.getResource(`planets/${id}`);
      return this._transformPlanet(planet);
    }

    getPlanetImg = (id) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    }

    getAllShips = async () => {
        const res = await this.getResource(`starships/`);
       return res.results.map(this._transformShip).slice(2,7);
    }

    getStarShip = async (id) => {
        const ship = await this.getResource(`starships/${id}`);
        return this._transformShip(ship);
    }

    getStarShipImg = (id) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1]
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            climate: planet.climate
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            eyeColor: person.eye_color,
            birthYear: person.birth_year,
        }
    }

    _transformShip = (ship) => {
        return {
            id: this._extractId(ship),
            name: ship.name,
            model: ship.model,
            manufacturer: ship.manufacturer,
            cost: ship.cost_in_credits,
            length: ship.length,
            crew: ship.crew,
            starshipClass: ship.starship_class,
            rating: ship.hyperdrive_rating
        }
    }
}
