import React from 'react'
import "./styles/CategoryItems.css";
import AddItem from './AddItem';
import { Modal, Button } from 'react-bootstrap';

function CategoryFilter({ categories, onSelectCategory, selectedCategory }) {
    const [modalShow, setModalShow] = React.useState(false);
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
            <>
            <Button className='modal-btn' variant="primary" onClick={() => setModalShow(true)}>
            Add Item
            </Button>
            <AddItem
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            </>
        </div>
    )
}

export default CategoryFilter
