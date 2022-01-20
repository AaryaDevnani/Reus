import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/CategoryItems.css';
import AddItem from './AddItem';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { QuantityPicker } from 'react-qty-picker';
import {
  addDonation,
  addItemsAction,
  deleteItemsAction,
  updateItemQuantityAction
} from '../actions';
import { Link, NavLink } from 'react-router-dom';

function ItemList({ items, setItems, selectedCategory, byProducts }) {
  const oneDayTime = 24 * 60 * 60 * 1000;
  const dispatch = useDispatch();

  // modal states
  const { userId } = useSelector((state) => state.auth);
  const [modalShow, setModalShow] = useState(false);
  const [itemInput, setItemInput] = useState({
    name: '',
    expiryDate: Date.now(),
    quantity: 0,
    category: 'Vegetables',
    imageURL: '',
    userId
  });

  // Expand Code
  const ps = document.querySelectorAll('p');
  const observer = new ResizeObserver((entries) => {
    for (let entry of entries) {
      entry.target.classList[
        entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove'
      ]('truncated');
    }
  });

  ps.forEach((p) => {
    observer.observe(p);
  });

  //Expand code end

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

  const handleOnItemInputChange = (e) => {
    setItemInput({ ...itemInput, [e.target.name]: e.target.value });
  };

  const addItemOptions = {
    method: 'POST',
    body: JSON.stringify(itemInput),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const addItem = async () => {
    const response = await fetch('/api/items', addItemOptions);
    const data = await response.json();
    if (data.error === '') {
      setItemInput({
        name: '',
        expiryDate: Date.now(),
        quantity: 0,
        category: '',
        imageURL: '',
        userId
      });
      dispatch(addItemsAction(data.newItem));
      setItems([...items, data.newItem]);
      setModalShow(false);
    } else {
      alert(data.error);
    }
  };

  const handleAddItemSubmit = (e) => {
    e.preventDefault();
    addItem();
  };

  const deleteItem = async (itemId) => {
    const deleteItemOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch(`/api/items/${itemId}`, deleteItemOptions);
    const data = await response.json();
    if (data.error === '') {
      setItems(items.filter((i) => i._id !== itemId));
      dispatch(deleteItemsAction(itemId));
    } else {
      alert(data.error);
    }
  };

  const handleOnDonate = (item) => {
    setItems(items.filter((i) => i._id !== item._id));
    dispatch(deleteItemsAction(item._id));
    dispatch(addDonation({ _id: item._id, name: item.name }));
  };

  const getExpiryClassName = (expiryDate) => {
    let curDate = Date.now();
    let diff = (new Date(expiryDate).getTime() - curDate) / oneDayTime;
    if (diff < 3) {
      return 'redDate';
    } else if (diff > 3 && diff < 14) {
      return 'orangeDate';
    } else if (diff > 14 && diff < 30) {
      return 'yellowDate';
    } else {
      return 'greenDate';
    }
  };

  const isExpired = (expiryDate) => {
    let curDate = Date.now();
    let diff = (new Date(expiryDate).getTime() - curDate) / oneDayTime;
    if (diff < 0) {
      return true;
    }
    return false;
  };

  return (
    <div className="item-biffer">
      <div className="btn-cards">
        <div className="itemList">
          <div className="bothNames">
            <p className="itms"> Item </p>
            <p className="itms"> By-product </p>
          </div>
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
            <div className="item-n-by">
              <div className="catItems" key={item._id}>
                <div className="itemData">
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
                    <h3 className="itemName">
                      <b>
                        {' '}
                        {item.name}{' '}
                        {isExpired(item.expiryDate) && (
                          <small className="expired">(Expired)</small>
                        )}
                      </b>
                    </h3>
                    <p className="itemInfo">
                      <span className={getExpiryClassName(item.expiryDate)}>
                        <b>
                          Exp. Date : {new Date(item.expiryDate).getUTCDate()}/
                          {new Date(item.expiryDate).getUTCMonth() + 1}/
                          {new Date(item.expiryDate).getUTCFullYear()}
                        </b>
                      </span>

                      <QuantityPicker
                        className="notOn"
                        value={item.quantity}
                        onChange={(value) => {
                          dispatch(
                            updateItemQuantityAction({
                              _id: item._id,
                              quantity: value
                            })
                          );
                        }}
                        min={0}
                        smooth
                      />
                      {item.calories && (
                        <>
                          <p className="calorieInfo">
                            Calories : {item.calories}{' '}
                          </p>
                        </>
                      )}
                    </p>
                  </div>
                </div>
                <div className="byProd-butn">
                  <div className="card-buttons">
                    <button
                      className="deleteBtn"
                      onClick={() => {
                        deleteItem(item._id);
                      }}
                    >
                      Delete
                    </button>
                    {!isExpired(item.expiryDate) && (
                      <button
                        className="donatBtn"
                        onClick={() => {
                          handleOnDonate(item);
                        }}
                      >
                        Donate
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div>
                {item.byProduct &&
                  item.byProduct.map((bp) => (
                    <div className="batItems" key={item._id}>
                      <div className="byProductData">
                        <h3 className="itemName">
                          <b>{bp.itemByproduct} </b>
                        </h3>
                        <p className="byProdInfo">{bp.use}</p>
                        {bp.videoURL && (
                          <p className="byProdVid">
                            <u>
                              <a href={bp.videoURL} target="_blank">
                                Watch video for more Info &#8599;
                              </a>
                            </u>
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="addBtn">
          <button className="bottn" onClick={() => setModalShow(true)}>
            Add Item
          </button>
          <AddItem
            show={modalShow}
            itemInput={itemInput}
            handleOnItemInputChange={handleOnItemInputChange}
            handleAddItemSubmit={handleAddItemSubmit}
            onHide={() => setModalShow(false)}
          />
          <Link to="/shoppingList" className="bottn">
            Grocery List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
