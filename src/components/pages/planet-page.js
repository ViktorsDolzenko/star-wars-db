import React from "react";
import  {
    PlanetList,
    PlanetDetails,
} from "../sw-componenets"

export class PlanetPage extends React.Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <PlanetList onItemSelected={this.onItemSelected}/>
                </div>
                <div className="col-md-6">
                    <PlanetDetails itemId={this.state.selectedItem}/>
                </div>
            </div>
        )
    }
}
