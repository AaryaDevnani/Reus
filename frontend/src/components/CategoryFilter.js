import React from 'react'
import "./styles/CategoryItems.css";

function CategoryFilter({ categories, onSelectCategory }) {
    const links = categories.map(i => (
        <div className='categories' key={i.id}>
            <a className='catLink' href="#" onClick={() => onSelectCategory(i.id)}>
                {i.title}
            </a>
        </div>
    ));
    return (
        <div className='categoryList'>
            {links}
        </div>
    )
}

export default CategoryFilter
