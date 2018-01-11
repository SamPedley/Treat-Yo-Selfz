import React from 'react'

export const TotalPurchase = ({ purchases }) => {
  const spent = purchases.reduce((acc, item) => item.cost + acc, 0);
  const remaining = spent ? 350 - spent : 350;
  return (
    <div>
      <h6>Spent: ${spent}</h6>
          <h4 style={{ color: remaining > 10 ? 'green': 'red'}}>${remaining.toFixed(2)} {remaining > 0 ? 'left to spend' : 'over spent'}</h4>

    </div>
  );
}

export default TotalPurchase