import React, { useEffect } from 'react'

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
            <p className="byproducts">Byproducts</p>
            {itemsWithByProducts.map((items)=>(
                items.byProducts.map((bp)=>(
                    <div>
                    <div>{bp.itemName}</div>
                    <div>{bp.itemByproduct}</div>
                    <div>{bp.use}</div>
                    </div>
                ))
            ))}
        </div>
    )
}

export default Recipebyproduct
