import Menu from '../menu/Menu.jsx';
import CopyrightButton from '../CopyrightButton/CopyrightButton.jsx';
import HomeButton from '../HomeButton/HomeButton.jsx';
import "./TourPage.css"

function TourPage({onClick}) {
    return (
      <div className="tour-page">
        <Menu onClick={onClick} color="white"></Menu>
        <CopyrightButton color="white"></CopyrightButton>
        <HomeButton onClick={onClick} color="white"></HomeButton>
        <div className="tour-info">
        <p className="tour-dates-tba">TOUR DATES TBA</p>
        </div>
      </div>
    );
  }
  
  export default TourPage;