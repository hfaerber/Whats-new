import React from 'react';
import './Menu.css'

const Menu = (props) => {
  return(
    <div className='menu'>
      <h1>What's New</h1>
      <nav>
        <button className='navButton'>Local News</button>
        <button className='navButton'>Technology</button>
        <button className='navButton'>Entertainment</button>
        <button className='navButton'>Science</button>
        <button className='navButton'>Health</button>
      </nav>
    </div>
  )
}

export default Menu;
