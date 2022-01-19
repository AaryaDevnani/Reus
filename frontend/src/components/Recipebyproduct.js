import React, { useEffect } from 'react'
import './styles/Recipebyproduct.css';

function Recipebyproduct({ingredients, byproducts}) {

    const itemsWithByProducts = ingredients.map(ing => {
        ing['byProducts'] = []
        byproducts.map(bp => {
            if (ing.name === bp.itemName) {
                console.log("here")
                ing.byProducts.push(bp)
            }
        })
        return ing
    }).filter(ing => ing.byProducts.length > 0)
    
    useEffect(() => {
        console.log({itemsWithByProducts})
    }, [itemsWithByProducts])
    
    return (
        <div item>
            <p className='byproduct' >Byproducts</p>
            {itemsWithByProducts.map((items)=>(
                items.byProducts.map((bp)=>(
                    <div >
                    <div className='ing' >Ingredient: {bp.itemName}</div>
                    <div className='ing2'>Byproduct: {bp.itemByproduct}</div>
                    <div className='ing3'>Use: {bp.use}</div>

                     {bp.videoURL ? (<div className='ing4'> Video: Watch video<a href={bp.videoURL}> here </a></div>) : (<div> </div>)}
                     <div className='border'></div>
                    </div>
                ))
            ))}
        </div>
    )
}

export default Recipebyproduct
