import React from "react";
import {withRouter} from "react-router-dom"
import  {
    PersonList,
    PersonDetails,
} from "../sw-componenets"

const PeoplePageComponent = ({history, match}) => {
    const { id } = match.params
        return (
                <div className="row">
            <div className="col-md-6">
                <PersonList onItemSelected={(id) => history.push(id)}/>
            </div>
        <div className="col-md-6">
            <PersonDetails itemId={id}/>
        </div>
                </div>
        )
}

export const PeoplePage = withRouter(PeoplePageComponent)
