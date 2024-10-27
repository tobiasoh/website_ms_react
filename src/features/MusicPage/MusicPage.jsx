import "./MusicPage.css"
import Menu from "../menu/Menu";
import CopyrightButton from "../CopyrightButton/CopyrightButton";
import HomeButton from "../HomeButton/HomeButton";

function MusicPage({onClick}) {
  return (
    <div className="music-page">
      <Menu onClick={onClick} color="black"></Menu>
      <div className="music-covers">
      <a href="https://open.spotify.com/album/6AOp3GsrBSTZHkmuGASFr8?si=fp4HjuK-Sh2yLf8iQUeggA" 
        className="image-link" target="_blank" rel="noopener noreferrer">
        <img src="../../covers/bear_street_album.jpg" className="album-cover" alt="Image 2"></img></a>

      <a href="https://open.spotify.com/album/2HA71VVuknEvDOcFP5NNs9?si=PdAR1u_hT-iyWvp0AlORnQ" 
      className="image-link" target="_blank" rel="noopener noreferrer">
          <img src="../../covers/dansing_lessons.jpg" className="album-cover" alt="Image 1"></img></a>

         <a href="https://open.spotify.com/album/5kQEgU4ZeGTaeqO6cGuvp8?si=M7K3jVEHRi6JO65ep7LkqA" 
      className="image-link" target="_blank" rel="noopener noreferrer">
          <img src="../../covers/singing_in_the_wind.jpg" className="album-cover" alt="Image 4"></img></a>


      <a href="https://open.spotify.com/album/2FIzDSx2S53SLKlv4cKr8u?si=NRu7eH12RMS__jRs4bRw3w" 
      className="image-link" target="_blank" rel="noopener noreferrer">
          <img src="../../covers/dragging_through_the_forest_morkere.jpg" className="album-cover" alt="Image 3"></img></a>

      <a href="https://open.spotify.com/album/2FIzDSx2S53SLKlv4cKr8u?si=NRu7eH12RMS__jRs4bRw3w" 
      className="image-link" target="_blank" rel="noopener noreferrer">
          <img src="../../covers/bear_street_single.jpg" className="album-cover" alt="Image 5"></img></a>


          <div className="music-videos">

        
<iframe className="youtube-vid" src="https://www.youtube.com/embed/_-0zdR4evQc?si=3_xC1vukzk2TA6ku" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>



<iframe className="youtube-vid" src="https://www.youtube.com/embed/jjnuaC-450g?si=rwJnOpSJMLwZ_B2V" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

<iframe className="youtube-vid" src="https://www.youtube.com/embed/F3VLn1-tuLk?si=GfX31fU9HNXc6klI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

</div>

      </div>


    <CopyrightButton color="black"></CopyrightButton>
    <HomeButton onClick={onClick} color="black"></HomeButton>
    </div>
  );
}

export default MusicPage;