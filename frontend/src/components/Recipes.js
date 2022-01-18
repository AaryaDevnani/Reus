import React, { useEffect, useState } from 'react'
import "./styles/Recipes.css"

function Recipes() {

    const [recipes, setRecipes] = useState([])

    const getRecipes = async (items) => {
        const appID = "a670aefe"
        const app_key = "2062231e1e23e9cfc408fa3516285253d8"
        const apiURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${items}&app_id=${appID}&app_key=%${app_key}`
        const response = await fetch(apiURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        const data = await response.json()
        setRecipes(data.hits)
    }
    
    useEffect(() => {
        getRecipes("chicken%20potato")
    }, [])
    return (
        <div className="recipePage container">
            <div className="input-group">
            <div className="form-outline">
            <input type="search" id="form1" className="form-control" />
            <label className="form-label" for="form1">Search</label>
            </div>
            <button type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
            </button>
            </div>
            <div className="row">
            <div className="col-5">
                <div className="invItems">
                    Categories
                    <div className="btns">
                    <input type='button' className='butn pill' value='Item Name'/>
                    <input type='button' className='butn pill' value='Item Name'/>
                    <input type='button' className='butn pill' value='Item Name'/>
                    <input type='button' className='butn pill' value='Item Name'/>
                    <input type='button' className='butn pill' value='Item Name'/>
                    <input type='button' className='butn pill' value='Item Name'/>
                    <input type='button' className='butn pill' value='Item Name'/>
                    <input type='button' className='butn pill' value='Item Name'/>
                    
                    </div>
                </div>
            </div>
            <div className=" col-6 listItems">
                {recipes.map(({recipe})=>(
                <div className='item'>
                    <p>{recipe.label}</p>
                </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Recipes
