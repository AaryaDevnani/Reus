import React from 'react';
import './styles/CategoryItems.css';
import AddItem from './AddItem';
import { Modal, Button } from 'react-bootstrap';

function ItemList({ items, selectedCategory, byProducts }) {
  const [modalShow, setModalShow] = React.useState(false);
  const currentItems = items.filter(
    (item) => item.category === selectedCategory.title
  );
  currentItems.map((curItem) => {
    curItem['byProduct'] = [];
    byProducts.map((bp) => {
      if (curItem.name === bp.itemName) {
        curItem.byProduct.push(bp);
      }
    });
  });
  console.log({ currentItems });
  return (
    <div className="btn-cards">
      <div className="addBtn">
        <Button
          className="modal-btn"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          Add Item
        </Button>
        <AddItem show={modalShow} onHide={() => setModalShow(false)} />
      </div>

      <div className="itemList">
        {currentItems.length === 0 && (
          <div className="noCatItems">
            <img
              src="images/product-not-found.jpg"
              alt="Product Not Found"
              width="600"
            />
          </div>
        )}
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
              {item.byProduct &&
                item.byProduct.map((bp) => (
                  <>
                    <small>Additional Use: {bp.itemByproduct}</small>
                    <br />
                    <small>Details: {bp.use}</small>
                    <br />
                  </>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
