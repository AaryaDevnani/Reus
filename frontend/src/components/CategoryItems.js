import React, { useEffect, useState } from 'react'
import "./styles/CategoryItems.css";
import ItemList from './ItemList';
import CategoryFilter from './CategoryFilter';



function CategoryItem() {

    useEffect(() => {
        console.log("here")
    }, [])
    

    const [categories, setCategories] = useState([
        { title: 'First Category', id: 0 },
        { title: 'Second Category', id: 1 },
        { title: 'Third Category', id: 2 }
    ])
    const [items, setItems] = useState([
        { title: 'Item 1', id: 0, image:'images/Image1.jpg',  category: { id: 0 } },
        { title: 'Item 2', id: 1, image:'images/Image1.jpg', category: { id: 0 } },
        { title: 'Item 3', id: 2, category: { id: 0 } },
        { title: 'Item 4', id: 3, image:'images/Image1.jpg', category: { id: 1 } },
        { title: 'Item 5', id: 4, category: { id: 1 } },
        { title: 'Item 6', id: 5, image:'images/Image1.jpg', category: { id: 2 } },
        { title: 'Item 7', id: 6, image:'images/Image1.jpg', category: { id: 2 } }
    ])

    const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0].id)

    const onSelectCategory = (id) => {
        setSelectedCategoryId(id)
    }
    
    const selectedCategory = categories.filter(category => category.id === selectedCategoryId)[0]
    
    return (
        <div className='categoryFilter'>
            <CategoryFilter  categories={categories} onSelectCategory={onSelectCategory} />
            <ItemList   items={items} selectedCategory={selectedCategory} />
        </div>
    )
}
export default CategoryItem
