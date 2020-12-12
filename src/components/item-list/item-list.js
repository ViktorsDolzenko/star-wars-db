import React from 'react';
import './item-list.css'

 export const ItemList = (props) =>  {
    const {data, onItemSelected, children: renderLabel} = props

    const items = data.map((item) => {
            const {id} = item
            const label = renderLabel(item);
            return (
                <li className="list-group-item list-item"
                    key={id}
                    onClick={() => onItemSelected(id)}>
                   {label}
                </li>
            );
        });

        return (
            <div className="flex-grow-1">
                    <ul className="list-group-flush list jumbotron rounded">
                        {items}
                    </ul>
            </div>
        )
    }
