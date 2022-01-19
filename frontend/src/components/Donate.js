import React, {useState, useEffect} from 'react';
import { useHistory, useLocation , NavLink} from 'react-router-dom';
import { Table, Button, CardGroup, Card, Container, Row, Col } from 'react-bootstrap';
import "./styles/Donate.css";
import { QuantityPicker } from 'react-qty-picker';
import { FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Donate() {
  return(
  <div className='donatePage'>
        <div className='donateListFlex'>
      <div className='donateList'>
    <p className='intro'>Donate Item List</p>
            
            <div className='donate-list-items'> 
                <Table  className='donateTable'>
                    <thead  >
                        <tr>
                        <th className='itemColumn'>
                            Item
                        </th>
                        <th className='deleteColumn'>
                            Remove
                        </th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td>Burger</td>
                            <td><button className="deleteBtn">Delete </button></td>
                        </tr>
                        <tr>
                            <td>Kanda Bhaji</td>
                            <td><button className="deleteBtn">Delete </button></td>
                        </tr>
                        <tr>
                            <td>Pasta</td>
                            <td><button className="deleteBtn">Delete </button></td>
                        </tr>
                        <tr>
                            <td>Burger</td>
                            <td><button className="deleteBtn">Delete </button></td>
                        </tr>
                        <tr>
                            <td>French Fries</td>
                            <td><button className="deleteBtn">Delete </button></td>
                        </tr>
                    </tbody>
                </Table>
            
            
            </div> 
            <button className="donateBtn"> Donate </button>
            </div>
            <div className='howWorks'>
              <h2 className='worksTitle'>How it works?</h2> 
              <img src='images/donate-how.png' className='howImage'  alt="donate" width="400"  />
            </div>
            </div> 
            <div className='donateBanner'>
          <img src='images/donate-png.png' className='flashImg' alt="donate" width="300"  />
          <div>
           <h1 className='bannerName'>DONATE FOOD AND HELP SOMEONE</h1>
          </div>
            </div>
  </div>
  )
}

export default Donate;
