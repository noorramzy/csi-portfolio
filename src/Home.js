import React from 'react';
import constructionClip from "./Construction-clip.png";
import "./Home.css"
import {Link} from 'react-router-dom';
// import './Insight.css'


function Home(props) {
  return (
    <div className="whole">
      <div className="toptop">
        Construction and Civil Engineering
      </div>

       <div className="smaller">
         
         <div className="words"> 
         <div className="home-title">{props.text} </div>
         <div className="inner-words"> 
         This is my portfolio! 
         It is a collection of the work my group and I have done during the first phase of our design journey. 
         Our group focuses on people who work in the fields of Civil Engineering and Construction management. 
         Above, you will see links to other webpages which display our insight statements, the personas we created and the reflection I wrote after out design review (the end of phase one). 
         Enjoy!
         </div>
         

         </div> 
        
        <div className="image-container">
          <div className="image">
          <img className= "claw-image" src={constructionClip} alt="constuction logo" />
          </div>
        </div>
          
       
        </div>
    </div>
  )
}

export default Home;
