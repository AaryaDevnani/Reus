import React, {useState, useEffect} from 'react';
import { useHistory, useLocation , NavLink} from 'react-router-dom';
import { Modal, Button, CardGroup, Card, Container, Row, Col } from 'react-bootstrap';
import { render } from 'react-dom';
import './styles/AddShoppingList.css';


    const AddShoppingItem = (props) => {
        
        // const { itemInput, handleOnItemInputChange, handleAddItemSubmit } = props;
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
              <form className="add-form" >
                <div className="loginContainer">
                  <div className="form-contro">
                    <label className="label">Item Name</label>
                    <input
                      type="text"
                      required="required"
                      placeholder="Enter item name"
                      name="name"
                    //   value={itemInput.name}
                    //   onChange={handleOnItemInputChange}
                    />
                  </div>
                  
                  <div className="form-contro">
                    <label className="label">Quantity</label>
                    <input
                      type="number"
                      required="required"
                      placeholder="Enter number of items"
                      name="quantity"
                    //   value={itemInput.quantity}
                    //   onChange={handleOnItemInputChange}
                    />
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

export default AddShoppingItem;
