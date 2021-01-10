import React from "react";

import './item-list.css';

// функция ItemList возвращает готовую разметку
// списка с именами либо имен, либо планет, либо кораблей. 

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

export default ItemList;


