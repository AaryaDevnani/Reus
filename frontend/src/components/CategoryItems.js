import React, { useEffect, useState } from 'react';
import './styles/CategoryItems.css';
import ItemList from './ItemList';
import CategoryFilter from './CategoryFilter';
import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import AddItem from './AddItem';

function CategoryItem() {
   
  const { userId } = useSelector((state) => state.auth);

  const [categories, setCategories] = useState([
    { title: 'Vegetables', id: 0 },
    { title: 'Fruits', id: 1 },
    { title: 'Protein', id: 2 },
    { title: 'Dairy', id: 3 },
    { title: 'Oils', id: 4 },
    { title: 'Beverages', id: 5 },
    { title: 'Grains', id: 6 },
    { title: 'Other', id: 7 }
  ]);
  const [items, setItems] = useState([]);

  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories[0].id
  );

  const onSelectCategory = (id) => {
    setSelectedCategoryId(id);
  };

  const selectedCategory = categories.filter(
    (category) => category.id === selectedCategoryId
  )[0];

  const getItems = async () => {
    const response = await fetch(`/api/items`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        UserId: userId
      }
    });
    const data = await response.json();
    if (!data.error === '') return data.error;
    else {
      setItems(data.items);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="categoryFilter">
       
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <ItemList items={items} selectedCategory={selectedCategory} />
    </div>
  );
}
export default CategoryItem;
