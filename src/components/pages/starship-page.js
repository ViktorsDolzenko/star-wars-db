import React from "react";
import {withRouter} from "react-router-dom"
import  {
    StarshipList,
} from "../sw-componenets"

const StarshipPageComponent = ({ history }) => {
        return (
                <div className="col-md-12">
                    <StarshipList onItemSelected={(itemId) => history.push(itemId)}/>
                </div>
        );
};

export const StarshipPage = withRouter(StarshipPageComponent);
