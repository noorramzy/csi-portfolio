import React from 'react';
import './Insight.css'

import {Link} from 'react-router-dom';


function Insight(props) {
  return (
    <div>
 
      <div className ="welcome">
      {props.welcome}

      </div>

        <div className="text">
                  {props.text}
                  {/* props.paragraphs.map(p => <div className= "paragraph">{p}</div>) */}

        </div>
        
    </div>

  )
}

export default Insight;
