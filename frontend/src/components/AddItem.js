import React, {useState} from 'react';
import { useHistory, useLocation , NavLink} from 'react-router-dom';
import "./styles/AddItem.css";
import { Modal, Button } from 'react-bootstrap';

const AddItem = (props) => {
    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className='add-form' >
        <div className='loginContainer'>
        <div className='form-contro'>
            <label className='label'>Item Name</label>
            <input
             type='text' required='required' 
             placeholder='Enter item name' 
             name='itemName'     
            //  value={userInput.itemName}
            //  onChange={handleOnChange}
            /> 
        </div>
        <div className='form-contro'>
            <label className='label'>Expiry Date</label>
            <input
             type='date' required='required'
             name='expiryDate' placeholder='Enter expiry date of item'    
            //  value={userInput.expirydate}
            //  onChange={handleOnChange}  
            /> 
        </div>
        <div className='form-contro'>
            <label className='label'>Quantity</label>
            <input
             type='number'  required='required'  
             placeholder='Enter number of items' 
             name='quantity'     
            //  value={userInput.quantity}
            //  onChange={handleOnChange}
            /> 
        </div>
        <div className='form-contro'>
            <label className='label'>Category:&nbsp;&nbsp;
            <select>
                <option selected value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="protein">Protein</option>
                <option value="dairy">Dairy</option>
                <option value="oils">Oils</option>
                <option value="beverages">Beverages</option>
                <option value="grains">Grains</option>
                <option value="other">Other</option>
            </select>
            </label>
            {/* <input
             type='category'
             placeholder='Select category of product' 
             name='category'     
            //  value={userInput.category}
            //  onChange={handleOnChange}
            />  */}
        </div>

        {/* <label className='label'>Category</label>
            <Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select> */}
        <div className='form-contro'>
        <label className='label' for='img' >Select Image:&nbsp;&nbsp;
        <input type="file" id="img" name="img" accept="image/*"></input>
        </label>
        </div>
        <input type='submit' className='butn butn-block add-item' value='Add item'/>
        </div>
    
    </form>
    </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default AddItem