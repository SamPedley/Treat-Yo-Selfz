import React from 'react';

const PurchaseItem = ({cost, name, id, onRemove}) => (
  <li className="list-group-item d-flex justify-content-between align-items-center">
    {name}
      <span
        onClick={() => onRemove(id)}
        className="badge badge-primary badge-pill"
      >
        ${cost}
      </span>
  </li>
);

export const ListPurchases = ({ purchases, onRemove }) => (
  <ul className="list-group">
    { 
        purchases.length
        ? purchases.map( (purchase, index) => <PurchaseItem {...purchase} onRemove={onRemove} key={index} /> )
        : <li className="list-group-item">Nothing purchased yet</li>
    }
  </ul>
);

export default ListPurchases;