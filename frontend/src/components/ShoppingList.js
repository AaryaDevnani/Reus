import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './styles/ShoppingList.css';
import { QuantityPicker } from 'react-qty-picker';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import AddShoppingItem from './AddShoppingItem';
import {
  addGroceryItemsAction,
  deleteGroceryItemsAction,
  storeGroceryItemsAction,
  updateGroceryItemQuantityAction
} from '../actions';

function ShoppingList() {
  const dispatch = useDispatch();
  const { groceries } = useSelector((state) => state.groceries);

  // modal states
  const { userId } = useSelector((state) => state.auth);
  const [modalShow, setModalShow] = React.useState(false);
  const [itemInput, setItemInput] = useState({
    name: '',
    quantity: 0,
    userId
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
    const response = await fetch('/api/groceries', addItemOptions);
    const data = await response.json();
    if (data.error === '') {
      setItemInput({
        name: '',
        quantity: 0
      });
      dispatch(addGroceryItemsAction(data.groceryItem));
      setItems([...items, data.groceryItem]);
      setModalShow(false);
    } else {
      alert(data.error);
    }
  };

  const handleAddItemSubmit = (e) => {
    e.preventDefault();
    addItem();
  };

  const [items, setItems] = useState(groceries);
  const getGroceries = async () => {
    const response = await fetch(`/api/groceries`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        UserId: userId
      }
    });
    const data = await response.json();
    if (!data.error === '') return data.error;
    else {
      setItems(data.groceryItems);
      dispatch(storeGroceryItemsAction(data.groceryItems));
    }
  };

  const deleteGrocery = async (id) => {
    const groceryID = id;
    const response = await fetch(`/api/groceries/${groceryID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.error === '') {
      setItems(items.filter((i) => i._id !== groceryID));
      dispatch(deleteGroceryItemsAction(groceryID));
    } else {
      alert(data.error);
    }
  };

  useEffect(() => {
    if (!groceries.length > 0) {
      getGroceries();
    }
  }, [groceries]);

  return (
    <div className="dashboardPage">
      <p className="intro">Your Grocery List</p>
      <>
        <Button
          className="butt"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          Add Item
        </Button>

        <AddShoppingItem
          show={modalShow}
          itemInput={itemInput}
          handleOnItemInputChange={handleOnItemInputChange}
          handleAddItemSubmit={handleAddItemSubmit}
          onHide={() => setModalShow(false)}
        />
      </>
      <div className="list-items">
        <div>
          <div className="list-item1">
            <h3 className="item1">Item</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="remove">Remove</h3>
          </div>

          {items.map((item) => (
            <div className="row list-item">
              <h3 className="col name">{item.name}</h3>
              <p className="col qty">
                <QuantityPicker
                  min={1}
                  value={item.quantity}
                  onChange={(value) => {
                    dispatch(
                      updateGroceryItemQuantityAction({
                        _id: item._id,
                        quantity: value
                      })
                    );
                  }}
                  smooth
                  width="8rem"
                />
              </p>
              <button
                onClick={() => {
                  deleteGrocery(item._id);
                }}
                type="button"
                className="bin col"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
