import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/CategoryItems.css';
import AddItem from './AddItem';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { QuantityPicker } from 'react-qty-picker';
import {
  addItemsAction,
  deleteItemsAction,
  updateItemQuantityAction
} from '../actions';
import { Link, NavLink } from 'react-router-dom';

function ItemList({ items, setItems, selectedCategory, byProducts }) {
  const dispatch = useDispatch();

  // modal states
  const { userId } = useSelector((state) => state.auth);
  const [modalShow, setModalShow] = useState(false);
  const [itemInput, setItemInput] = useState({
    name: '',
    expiryDate: Date.now(),
    quantity: 0,
    category: '',
    imageURL: '',
    userId
  });
  
  // Expand Code 
  const ps = document.querySelectorAll('p');
  const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
    }
  });

  ps.forEach(p => {
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
        imageURL: ''
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
        <AddItem
          show={modalShow}
          itemInput={itemInput}
          handleOnItemInputChange={handleOnItemInputChange}
          handleAddItemSubmit={handleAddItemSubmit}
          onHide={() => setModalShow(false)}
        />
        <Link to="/shoppingList" className="btn btn-primary">
          Grocery List
        </Link>
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
                  <b> {item.name}</b>
                </h3>
                <p className="itemInfo">
                  <span className="expDate">
                    <b>
                      Exp. Date : {new Date(item.expiryDate).getUTCDate()}/
                      {new Date(item.expiryDate).getUTCMonth() + 1}/
                      {new Date(item.expiryDate).getUTCFullYear()}
                    </b>
                  </span>

                  <QuantityPicker
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
            <div className='byProd-butn'>
            {item.byProduct &&
              item.byProduct.map((bp) => (
                <>
                  <OverlayTrigger 
                delay={{ hide: 450, show: 300 }}
                overlay={(props) => (
                  <Tooltip {...props} className='toolTipText' >
                     Details: {bp.use}
                  </Tooltip>
                )}
                placement="bottom"
                ><p className='byproductText'><u>  Use of By-Product: {bp.itemByproduct}</u></p>
              </OverlayTrigger>
              
                </>
              ))}
              
            <div className="card-buttons">
              <button
                className="deleteBtn"
                onClick={() => {
                  deleteItem(item._id);
                }}
              >
                Delete
              </button>
              <button className="donatBtn">Donate</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
