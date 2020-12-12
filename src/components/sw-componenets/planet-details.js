import React from "react";
import ItemDetails, {Record} from "../item-details";
import {withSwapiService} from "../../hocs";

const PlanetDetails = (props) => {
                    return (
                        <ItemDetails {...props}>
                            <Record field="diameter" label="Diameter:" />
                            <Record field="climate" label="Climate:"/>
                            <Record field="population" label="Population:"/>
                        </ItemDetails>
                    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImgUrl: swapiService.getPlanetImg
    }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
