import React from 'react';
import './item-details.css'
import {Spinner} from "../spinner/";
import {ItemView} from "../item-view"

export const Record = ({item, field, label}) => {
    return(
        <li className="list-group-item">
            <span className="info-title">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export class ItemDetails extends React.Component {
    state = {
        item : null,
        image: null,
        loading: true,
    }

    componentDidMount() {
        this.updateItem();
        this.setState({loading: false})
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImgUrl !== prevProps.getImgUrl) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImgUrl } = this.props;
        if(!itemId){
            return;
        }
            getData(itemId)
            .then((item) => this.setState({
                item,
                image: getImgUrl(item.id),
            }));
            }

    render() {
        if(this.state.item === null){
            return <p>Select any option from a list</p>
        }

        const { item, image, loading } = this.state
        const content = <ItemView item={item} image={image} properties={this.props.children}/>
           return(
            <div className="jumbotron rounded d-flex item-section col-md-12">
                { loading ? <Spinner/> : content}
            </div>
           )
    }
}
