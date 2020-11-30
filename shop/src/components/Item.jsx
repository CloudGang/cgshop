import React from "react";
import { useParams, Route, NavLink, Switch, useRouteMatch} from "react-router-dom";
import ItemDescription from "./ItemDescription";
import ItemShipping from "./ItemShipping";

// we will be importing and adding a lot of items to this component
function Items(props) {
  console.log("Props", props);
  const { itemID } = useParams();
  const { path, url } = useRouteMatch();
  const shopItem = props.items.find(item => item.id === Number(itemID));

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={shopItem.imageUrl} alt={shopItem.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{shopItem.name}</h2>
          <h4>${shopItem.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
        <NavLink to={`${url}/description`}>Description</NavLink>
        <NavLink to={`${url}/shipping`}>Shipping</NavLink>
      </nav>
      <Switch>
        <Route path={`${path}/shipping`}>
          <ItemShipping item={shopItem} />
        </Route>
        <Route path={`${path}/description`}>
          <ItemDescription item={shopItem} />
        </Route>
      </Switch>
    </div>
  );
}
export default Items;
