import React from 'react'
import Header from '../header'
import RandomPlanet from "../random-planet";
import "./app.css"
import {ErrorIndicator} from "../error-indicator/error-indicator";
import {SwapiService} from "../../services/swapi-service";
import {MockSwapiServices} from "../../services/mock-swapi-services";
import {SwapiServiceProvider} from "../swapi-service-context";
import {PeoplePage, PlanetPage, StarshipPage} from "../pages";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StarshipDetails from "../sw-componenets/starship-details";
import {WelcomePage} from "../welcome-page/welcome-page";

export class App extends React.Component {

    state = {
        showRandomPlanet: true,
        hasError: false,
        swapiService: new SwapiService(),
    }

    onDataChange = () => {
    this.setState(({swapiService}) => {
        const Service = swapiService instanceof SwapiService ? MockSwapiServices : SwapiService;

        return {
            swapiService: new Service()
        };
    });
    }

   toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        })
   }

   componentDidCatch() {
        this.setState({
            hasError: true
        })
   }

    render() {
        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
        const status = this.state.swapiService instanceof SwapiService ? "Get Mock Data" : "Get Api Data";
        return (
            <SwapiServiceProvider value={this.state.swapiService}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
                <Header onDataChange={this.onDataChange} status={status}/>
                {planet}
                <button
                    type="button" className="btn btn-success random-planet-button"
                    onClick={this.toggleRandomPlanet}>Toggle
                    Random Planet
                </button>
                <Switch>
                <Route exact path="/" component={WelcomePage}/>
                        <Route exact path="/people/:id?" component={PeoplePage}/>
                        <Route exact path="/planets" component={PlanetPage}/>
                        <Route exact path="/starships" component={StarshipPage}/>
                        <Route exact path="/starships/:id"
                               render={({ match }) => {
                                   const {id} = match.params
                                 return  <StarshipDetails itemId={id}/>
                               }} />
                </Switch>
            </div>
                </BrowserRouter>
            </SwapiServiceProvider>
        );
    }
}
