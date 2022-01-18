import React from 'react'
import "./styles/CategoryItems.css";
import AddItem from './AddItem';


function CategoryFilter({ categories, onSelectCategory, selectedCategory }) {
    
    const links = categories.map(i => (
        <div className='categories' key={i.id}>
       
            {selectedCategory.id === i.id ? (
                <a className='catLinkActive' href="#" onClick={() => onSelectCategory(i.id)}>
                    {i.title}
                </a>
                
            ) : (
                <a className='catLink' href="#" onClick={() => onSelectCategory(i.id)}>
                    {i.title}
                </a>
               
            )}
             </div>
        
    ));
    return (
        <div className='categoryList'>
            <h2 className='category'>Categories</h2>
            {links}
            
        </div>
    )
}

export default CategoryFilter
