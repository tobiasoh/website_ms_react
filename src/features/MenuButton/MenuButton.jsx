import { useState } from 'react'
import './Menubutton.css';


function MenuButton({color, type, onClick}) {


    /*
    props: 
        props.color
        props.width
        props.height
        props.type -> music, tours, osv
    */
   /* set path to right image based on color*/


   var image_path = "public/buttons/".concat(color, "/", type)

   const normal_img = image_path.concat(".png")
   const hover_img = image_path.concat("-hover.png")
   
   /* handle hovering */
   const [isHovered, setIsHovered] = useState(false);

   const handleMouseEnter = () => {
    setIsHovered(true);
   };

   const handleMouseLeave = () => {
     setIsHovered(false);   

  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(type)
      }

    >
      <img
        src={isHovered ? hover_img : normal_img}
        alt="Menu Button"
      />
    </button>
  );
}

export default MenuButton