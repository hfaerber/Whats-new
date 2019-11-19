import React from 'react';
import './Menu.css'

const Menu = ({setSelectedNews}) => {
  return(
    <div className='menu'>
      <h1>What's New</h1>
      <nav onClick={(event) =>
        setSelectedNews(event.target.name)}>
        <button name='local' className='navButton'>
          Local News</button>
        <button name='technology' className='navButton'>
          Technology</button>
        <button name='entertainment' className='navButton'>
          Entertainment</button>
        <button name='science' className='navButton'>
          Science</button>
        <button  name='health' className='navButton'>
          Health</button>
      </nav>
    </div>
  )
}

export default Menu;
