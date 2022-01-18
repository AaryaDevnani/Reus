import React from 'react';
import './styles/CategoryItems.css';

function ItemList({ items, selectedCategory }) {
  console.log({ selectedCategory });
  console.log({ items });
  const currentItems = items.filter(
    (item) => item.category === selectedCategory.title
  );
  return (
    <div className="itemList">
      {currentItems.length === 0 && <div>No Items found</div>}
      {currentItems.map((item) => (
        <div className="catItems" key={item._id}>
          <div className="itemImage">
            {item.imageURL && (
              <img
                src={item.imageURL}
                className="flashImg"
                alt="abcd"
                width="120"
                height="120"
              />
            )}
          </div>
          <div>
            <h3 className="itemName"> {item.name} </h3>
            <p className="itemInfo">
              Exp. Date : {new Date(item.expiryDate).getUTCMonth() + 1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
