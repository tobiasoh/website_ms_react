import React from 'react';
import './CopyrightButton.css'

function CopyrightButton({ color, onClick }) {
  return (
    <button className="copyright-button" style={{color: color}} onClick={onClick}>© 2024 Marius Samuelsen</button>
  );
}

export default CopyrightButton;