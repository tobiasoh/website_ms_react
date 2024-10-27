import Menu from "../menu/Menu.jsx";
import CopyrightButton from "../CopyrightButton/CopyrightButton";
import HomeButton from "../HomeButton/HomeButton";
import './SubscribePage.css'
import Newsletter from "../Newsletter/Newsletter.jsx"

function SubscribePage({onClick}) {
  return (
    <div className="subscribe-page">
      <Menu onClick={onClick} color="black"></Menu>
      <div className="subscribe-form">
        <Newsletter></Newsletter>

      </div>
      

      <CopyrightButton color="black"></CopyrightButton>
      <HomeButton onClick={onClick} color="black"></HomeButton>
    </div>
  );
}

export default SubscribePage;