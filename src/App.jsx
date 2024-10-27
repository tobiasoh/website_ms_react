import { useState, useEffect } from 'react';
import './App.css';
import HomePage from './features/HomePage/HomePage.jsx';
import MusicPage from './features/MusicPage/MusicPage.jsx';
import ContactPage from './features/ContactPage/ContactPage.jsx';
import SubscribePage from './features/SubscribePage/SubscribePage.jsx';
import TourPage from './features/TourPage/TourPage.jsx';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className={`page-${currentPage}`}>
    {currentPage === 'music' && <MusicPage onClick={handlePageChange} />}
    {currentPage === 'tour' && <TourPage onClick={handlePageChange}/>}
    {currentPage === 'subscribe' && <SubscribePage onClick={handlePageChange}/>}
    {currentPage === 'contact' && <ContactPage onClick={handlePageChange}/>}
    {currentPage === 'home' && <HomePage onClick={handlePageChange}></HomePage>}
    </div>
  )
}

export default App

