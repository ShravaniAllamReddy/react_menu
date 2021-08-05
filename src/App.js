import './App.css';
import React, { useState } from 'react';
import Menu from './components/Menu'
import items from './data';


function App() {

  const [menuItems, setMenuItems] = useState(items);

 
    // const filteredLunchItems = items.filter(item => item.category === 'lunch');
    // const filteredBfItems = items.filter(item => item.category === 'breakfast');
  

  return (
          
        <Menu items={menuItems}/>
        
  );
}

export default App;
