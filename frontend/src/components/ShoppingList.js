import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import { Button, CardGroup, Card, Container, Row, Col } from 'react-bootstrap';
import './styles/ShoppingList.css';
import { QuantityPicker } from 'react-qty-picker';
import { FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import AddShoppingItem from './AddShoppingItem';

function ShoppingList() {
  const [modalShow, setModalShow] = React.useState(false);
  const { userId } = useSelector((state) => state.auth);
  const [items, setItems] = useState([]);
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
      console.log(data);
    }
  };

  useEffect(() => {
    getGroceries();
  }, []);

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

        <AddShoppingItem show={modalShow} onHide={() => setModalShow(false)} />
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
                <QuantityPicker min={1} smooth width="8rem" />
              </p>
              <button type="button" className="bin col">
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
