import React from "react";
import {ItemDetails, Record} from "../item-details";
import {withSwapiService} from "../../hocs";

const StarshipDetails = (props) => {
    return (
                        <ItemDetails {...props}>
                            <Record field="model" label="Model:" />
                            <Record field="manufacturer" label="Manufacturer:"/>
                            <Record field="cost" label="Cost:"/>
                            <Record field="length" label="Length:"/>
                            <Record field="crew" label="Crew:"/>
                            <Record field="starshipClass" label="Class:"/>
                            <Record field="rating" label="Rating:"/>
                        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarShip,
        getImgUrl: swapiService.getStarShipImg
    }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
