import React, {useState} from 'react';
import { useHistory, useLocation , NavLink} from 'react-router-dom';
import { Button, CardGroup, Card, Container, Row, Col } from 'react-bootstrap';
import "./styles/ShoppingList.css";
import { QuantityPicker } from 'react-qty-picker';
import { FaTrash } from 'react-icons/fa';

function ShoppingList() {
    return (
        <div className="dashboardPage">
            <p className='intro'>Your Shopping List</p>
             {/* <p className='heh2'>Item</p>
             <p className='heh3'>Quantity</p> */}
            
            <div className='list-items'> 
            <div className='list-item1'>
                <div>
                <h3 className='item1'>Item</h3> 
                <h3 className='quantity'>Quantity</h3> 
                <h3 className='remove'>Remove</h3> 
                </div>
            </div>
        
            <div className='list-item'>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'><QuantityPicker min={0} smooth/></p>
                <Button variant='outline-dark' className='btn'>Delete </Button>
               
                </div>
            </div>
            <div className='list-item'>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'><QuantityPicker min={0} smooth/></p>
                <Button variant='outline-dark' className='btn'>Delete </Button>
                </div>
            </div>
            <div className='list-item'>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'><QuantityPicker min={0} smooth/></p> 
                <Button variant='outline-dark' className='btn'>Delete </Button>
                </div> 
            </div>
            <div className='list-item'>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'><QuantityPicker min={0} smooth/></p> 
                <Button variant='outline-dark' className='btn'>Delete</Button>
                </div>
            </div>
            <div className='list-item'>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'><QuantityPicker min={0} smooth/></p>
                <Button variant='outline-dark' className='btn'>Delete</Button>
                </div>
            </div>
            <div className='list-item'>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'><QuantityPicker min={0} smooth/></p>
                <Button variant='outline-dark' className='btn'>Delete</Button>
                </div>
            </div>
            <div className='list-item'>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'><QuantityPicker min={0} smooth/></p>
                <Button variant='outline-dark' className='btn'>Delete</Button>
                </div>
            </div>
            <div className='list-item'>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'><QuantityPicker min={0} smooth/></p>
                <Button variant='outline-dark' className='btn'>Delete</Button>
                </div>
                
            </div>
            </div> 
        </div>
    )
}

export default ShoppingList;
