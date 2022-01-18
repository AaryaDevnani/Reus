import React, {useState} from "react";
import { useHistory, useLocation , NavLink} from 'react-router-dom';
import "./styles/Dashboard.css";
import AddItem from "./AddItem";

function Dashboard(){
    return(
        <div className="dashboardPage">
            <div className='list-items'> 
            <div className='list-item'>
                <div>
                <img src='images/Image1.jpg' className='flashImg' alt="abcd" width="120" height="120" />
                </div>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'>Exp. Date : 23/12/23</p> 
                <p className='flashData'>Quantity : 2 </p>  
                <p className='flashData'>Booked By : Amogh </p>
                </div>
            </div>
            <div className='list-item'>
                <div>
                <img src='images/Image1.jpg' className='flashImg' alt="abcd" width="120" height="120" />
                </div>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'>Exp. Date : 23/12/23</p> 
                <p className='flashData'>Quantity : 2 </p>  
                <p className='flashData'>Booked By : Amogh </p>
                </div>
            </div>
            <div className='list-item'>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'>Exp. Date : 23/12/23</p> 
                <p className='flashData'>Quantity : 2 </p>  
                <p className='flashData'>Booked By : Amogh </p>
                </div>
            </div>
            <div className='list-item'>
                <div>
                <img src='images/Image1.jpg' className='flashImg' alt="abcd" width="120" height="120" />
                </div>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'>Exp. Date : 23/12/23</p> 
                <p className='flashData'>Quantity : 2 </p>  
                <p className='flashData'>Booked By : Amogh </p>
                </div> 
            </div>
            <div className='list-item'>
                <div>
                <img src='images/Image1.jpg' className='flashImg' alt="abcd" width="120" height="120" />
                </div>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'>Exp. Date : 23/12/23</p> 
                <p className='flashData'>Quantity : 2 </p>  
                <p className='flashData'>Booked By : Amogh </p>
                </div>
            </div>
            <div className='list-item'>
            <div>
                <img src='images/Image1.jpg' className='flashImg' alt="abcd" width="120" height="120" />
                </div>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'>Exp. Date : 23/12/23</p> 
                <p className='flashData'>Quantity : 2 </p>  
                <p className='flashData'>Booked By : Amogh </p>
                </div>
            </div>
            <div className='list-item'>
            <div>
                <img src='images/Image1.jpg' className='flashImg' alt="abcd" width="120" height="120" />
                </div>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'>Exp. Date : 23/12/23</p> 
                <p className='flashData'>Quantity : 2 </p>  
                <p className='flashData'>Booked By : Amogh </p>
                </div>
            </div>
            <div className='list-item'>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'>Exp. Date : 23/12/23</p> 
                <p className='flashData'>Quantity : 2 </p>  
                <p className='flashData'>Booked By : Amogh </p>
                </div>
            </div>
            <div className='list-item'>
                <div>
                <h3 className='flashName'>Burger</h3> 
                <p className='flashData'>Exp. Date : 23/12/23</p> 
                <p className='flashData'>Quantity : 2 </p>  
                <p className='flashData'>Booked By : Amogh </p>
                </div>
                
            </div>
            </div> 
        </div>
    )
}

export default Dashboard;