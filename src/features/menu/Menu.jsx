import MenuButton from '../MenuButton/MenuButton';
import './Menu.css';
import {useState} from 'react';

function Menu({onClick, color}) {


  return (
    <nav className='navbar'>
        <MenuButton type="tour" color={color}
              onClick={onClick}
        ></MenuButton>
        <MenuButton type="music" color={color}
              onClick={onClick}
              
        ></MenuButton>
        <MenuButton type="contact" color={color}
              onClick={onClick}
        ></MenuButton>
        <MenuButton type="subscribe" color={color}
              onClick={onClick}
        ></MenuButton>
    </nav>
  );
}

export default Menu