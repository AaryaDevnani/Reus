import React, { useState } from 'react';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import './styles/AddItem.css';
import { Modal, Button } from 'react-bootstrap';

const AddItem = (props) => {
  const { itemInput, handleOnItemInputChange, handleAddItemSubmit } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="add-form" onSubmit={handleAddItemSubmit}>
          <div className="loginContainer">
            <div className="form-contro">
              <label className="label">Item Name</label>
              <input
                type="text"
                required="required"
                placeholder="Enter item name"
                name="name"
                value={itemInput.name}
                onChange={handleOnItemInputChange}
              />
            </div>
            <div className="form-contro">
              <label className="label">Expiry Date</label>
              <input
                type="date"
                required="required"
                name="expiryDate"
                placeholder="Enter expiry date of item"
                value={itemInput.expiryDate}
                onChange={handleOnItemInputChange}
              />
            </div>
            <div className="form-contro">
              <label className="label">Quantity</label>
              <input
                type="number"
                required="required"
                placeholder="Enter number of items"
                name="quantity"
                value={itemInput.quantity}
                onChange={handleOnItemInputChange}
              />
            </div>
            <div className="form-contro">
            <label className="label">Image URL</label>
              <input
                type="text"
                id='img'
                name="imageURL"
                placeholder="Enter image url"
                value={itemInput.imageURL}
                onChange={handleOnItemInputChange}
              />
            </div>
            <div className="form-contro">
              <label className="label">
                Category:&nbsp;&nbsp;
                <select name="category" onChange={handleOnItemInputChange}>
                  <option selected value="Vegetables">
                    Vegetables
                  </option>
                  <option value="Fruits">Fruits</option>
                  <option value="Protein">Protein</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Oils">Oils</option>
                  <option value="Beverages">Beverages</option>
                  <option value="Grains">Grains</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>
            <input
              type="submit"
              className="butn butn-block add-item"
              value="Add item"
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddItem;
