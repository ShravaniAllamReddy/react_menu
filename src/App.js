import './App.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './data';

const useStyles = makeStyles((theme) => ({

  center:{
    textAlign:'center'
  }
}));
const allcategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const classes = useStyles();
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allcategories);


  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }


  return (
    <>
     <h2 className={classes.center}> Our Menu</h2>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </>
  );
}

export default App;
