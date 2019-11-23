import React from 'react';
import './Menu.css'
import PropTypes from 'prop-types';

const Menu = ({setSelectedNews}) => {
  return(
    <div className='menu'>
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

Menu.propTypes = {
  setSelectedNews: PropTypes.func,
}

export default Menu;
