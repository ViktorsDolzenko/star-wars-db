import React from "react";
import ItemDetails, {Record} from "../item-details";
import {withSwapiService} from "../../hocs";

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="birthYear" label="BirthYear:" />
            <Record field="eyeColor" label="Eye Color:"/>
            <Record field="gender" label="Gender:"/>
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImgUrl: swapiService.getPersonImg
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);
