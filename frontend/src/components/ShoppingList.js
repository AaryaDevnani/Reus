import React, {useState, useEffect} from 'react';
import { useHistory, useLocation , NavLink} from 'react-router-dom';
import { Button, CardGroup, Card, Container, Row, Col } from 'react-bootstrap';
import "./styles/ShoppingList.css";
import { QuantityPicker } from 'react-qty-picker';
import { FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';


function ShoppingList() {
    
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
            console.log(data)
          }
        };

        useEffect(() => {
            getGroceries();
          }, []);


          
    return (
        <div className="dashboardPage">
            <p className='intro'>Your Shopping List</p>
            
            <div className='list-items'> 
            <div className='list-item1'>
                <div>
                <h3 className='item1'>Item</h3> 
                <h3 className='quantity'>Quantity</h3> 
                <h3 className='remove'>Remove</h3> 
                </div>
            </div>
        
            
                
                    {items.map((item) => (
                        <div className='list-item'>
                        <div>
                        <h3 className='flashName'>{item.name}</h3> 
                        <p className='flashData'><QuantityPicker min={0} smooth/></p>
                        <Button variant='outline-dark' className='btn1'>Delete </Button>
                        </div>
                        </div>
                      ))}
            
            
            </div> 
        </div>
    )
}

export default ShoppingList;
