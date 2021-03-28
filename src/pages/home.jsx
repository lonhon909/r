import React from 'react';

function ProductTable(props) {
  return (
    <ul className="table">
      {
        props.result.map((item, index) => (
          <li key={index}>
            <p>{item.name}---{item.price}</p>
          </li>
        ))
      }
    </ul>
  )
}

export default ProductTable;
