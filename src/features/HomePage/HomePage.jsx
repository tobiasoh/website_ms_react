import Canvas from '../Canvas/Canvas.jsx'
import './HomePage.css'
import Menu from '../menu/Menu.jsx';
import CopyrightButton from '../CopyrightButton/CopyrightButton.jsx';

function HomePage({onClick}) {
  return (
    <div className="home-page">
      <Menu onClick={onClick} color="white"></Menu>
      <Canvas currentPage="home"></Canvas>
      <CopyrightButton color="white"></CopyrightButton>
    </div>
  );
}

export default HomePage;