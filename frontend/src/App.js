import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/Dashboard";
import Recipes from "./components/Recipes";
import CategoryItems from './components/CategoryItems';
import ShoppingList from './components/ShoppingList';
import AddItem from './components/AddItem';
import Calendar from './components/Calendar';
import Donate from './components/Donate';
import AddShoppingItem from './components/AddShoppingItem';
import Recipe from './components/Recipe';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/register" element={<Register />} />
              <Route exact path='/recipes' element={<Recipes/>} />
              <Route exact path='/recipe/:id' element={<Recipe/>} />
              <Route exact path='/categoryItems' element={<CategoryItems/>} />
              <Route exact path='/shoppingList' element={<ShoppingList/>} />
              <Route exact path='/addItem' element={<AddItem/>} />
              <Route exact path='/calendar' element={<Calendar/>} />
              <Route exact path='/donate' element={<Donate/>} />
              <Route exact path='/addShoppingItem' element={<AddShoppingItem/>} />

          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
