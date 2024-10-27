import React from 'react';
import './HomeButton.css'

function HomeButton({ color, onClick }) {
  return (
    <button className="home-button" style={{color: color}}
    onClick={() => onClick("home")}>HOME</button>
  );
}

export default HomeButton;