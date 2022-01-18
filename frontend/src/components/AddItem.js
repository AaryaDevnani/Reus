import React, {useState} from 'react';
import { useHistory, useLocation , NavLink} from 'react-router-dom';
import "./styles/AddItem.css";

const AddItem = () => {
    return (
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
             type='quantity'  required='required'  
             placeholder='Enter number of items' 
             name='quantity'     
            //  value={userInput.quantity}
            //  onChange={handleOnChange}
            /> 
        </div>
        <div className='form-contro'>
            <label className='label'>Category
            <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
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
       
        <input type='submit' className='butn butn-block' value='Add item'/>
        </div>
    
    </form>
    )
}

export default AddItem