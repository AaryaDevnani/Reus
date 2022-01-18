import React from 'react'
import "./styles/CategoryItems.css";

function ItemList({ items, selectedCategory }) {
    console.log({selectedCategory})
    const currentItems = items
        .filter(i => i.category.id === selectedCategory.id)
        console.log({currentItems})
    return (
        <div className='itemList' >
            {currentItems.map(i => (
            <div className='catItems' key={i.id}>
                {i.title}
                <img src={i.image} className='flashImg' alt="abcd" width="120" height="120" />
            </div>
        ))}
        </div>
    )
}

export default ItemList
