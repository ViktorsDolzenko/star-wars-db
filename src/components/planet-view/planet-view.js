import React from "react";
import './planet-view.css'

export const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet

    return(
        <>
            <img className="planet-img" alt="planet" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div className="planet-info">
                <h4 className="planet-name">{name}</h4>
                <ul className="list-group-flush ">
                    <li className="list-group-item">
                        <span className="info-title">Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="info-title">Rotation Period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="info-title">Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    );
}
