import React from 'react';
import {SwapiService} from '../../services/swapi-service'
import {Spinner} from "../spinner";
import {PlanetView} from "../planet-view"
import {ErrorIndicator} from "../error-indicator";

export class RandomPlanet extends React.Component{

    swapiServices = new SwapiService();

    state = {
        planet: {},
        loading: true,
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet,1500)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };

    onError = (err) => {
        this.setState({
             error:true,
             loading: false,
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 15) + 3;
    this.swapiServices
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    }

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error)
        const errorMessage = error ? <ErrorIndicator/> : null
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded d-flex">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    };
}

