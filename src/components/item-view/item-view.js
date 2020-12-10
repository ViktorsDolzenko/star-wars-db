import React from 'react';

export const ItemView = ({item, image, properties}) => {
return(
    <>
    <img className="person-img" alt="item"
             src={image}/>
        <div className="person-info">
            <h4 className="person-name">{item.name}</h4>
            <ul className="list-group-flush ">
                {
                    React.Children.map(properties, (child,idx) => {
                        return React.cloneElement(child, { item })
                    })
                }
            </ul>
        </div>
    </>
)
}
