import React from 'react'
import "./styles/Recipes.css"
function Recipes() {
    return (
        <div className="recipePage container">
            <div className="row">
            <div className="col-5">
                <div className="invItems">
                    Categories
                    <div className="btns">
                    <input type='submit' className='butn pill' value='Item Name'/>
                    <input type='submit' className='butn pill' value='Item Name'/>
                    <input type='submit' className='butn pill' value='Item Name'/>
                    <input type='submit' className='butn pill' value='Item Name'/>
                    <input type='submit' className='butn pill' value='Item Name'/>
                    <input type='submit' className='butn pill' value='Item Name'/>
                    <input type='submit' className='butn pill' value='Item Name'/>
                    <input type='submit' className='butn pill' value='Item Name'/>
                    
                    </div>
                </div>
            </div>
            <div className=" col-6 listItems">
                <div className='item'>
                    Test
                </div>
                <div className='item'>
                    Test
                </div>
                <div className='item'>
                    Test
                </div> 
                </div>
            </div>
        </div>
    )
}

export default Recipes
