import React from "react";
import { Link } from "react-router-dom";

// what do we need to add to this component so we can map through items?

function ItemsList(props) {
  console.log("items", props);
  return (
    <div className="items-list-wrapper">
      {props.items.map(item => (
        <div
          className="item-card"
          key={item.id}
        >
          <Link to={`/item-list/${item.id}`}>
            <img
              className="item-list-image"
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
          </Link>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;