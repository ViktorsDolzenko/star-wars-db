import React from 'react'
import './header.css'
import {Link} from "react-router-dom";

export const Header = ({onDataChange, status}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link to="/" className="navbar-brand logo"> Star Wars DB</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="navbar-collapse collapse show" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/people/" className="nav-link" href="#">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/planets/" className="nav-link" href="#">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/starships/" className="nav-link" href="#">Starships</Link>
                    </li>
                </ul>
                <li className="nav-item">
                    <button className="btn btn-success" onClick={onDataChange}>{status}</button>
                </li>
            </div>
        </nav>
    );
};
