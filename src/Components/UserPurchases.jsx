import React from 'react'

import Add from './AddPurchase';
import List from './ListPurchases';
import Total from './TotalPurchases';

export const UserPurchases = ({user, purchases, onAdd, onRemove}) => (
<div className="card" style={{marginBottom: '2rem'}}>
  <div className="card-block">
    <h1 className="card-title" style={{textTransform: 'capitalize'}}>{user}</h1>
    <List purchases={purchases} onRemove={onRemove} />
    <Add onAdd={onAdd} />
    <Total purchases={purchases} />
  </div>
</div>
)

export default UserPurchases