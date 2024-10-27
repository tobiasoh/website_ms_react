import './ContactPage.css'
import Menu from '../menu/Menu.jsx';
import CopyrightButton from '../CopyrightButton/CopyrightButton.jsx';
import HomeButton from '../HomeButton/HomeButton.jsx';

function ContactPage({onClick}) {
  return (
    <div>
    <Menu onClick={onClick} color="black"></Menu>
    <div className="contact-page">

        <p>Cecilie Torp-Holte</p>
        <p>+47 957 05 245</p>
        <p>cecilie@circlemanagement.no</p>
    </div>
    <CopyrightButton color="black"></CopyrightButton>
    <HomeButton onClick={onClick} color="black"></HomeButton>
    </div>

  );
}

export default ContactPage;