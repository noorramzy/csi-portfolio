import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home'
import Insights from './Insights'
import Navbar from './Navbar';
import Persona from './Persona'
import Personas from './Personas'
import Reflection from './Reflection'
import oswaldClip from "./oswald.png"
import candiceClip from "./candice.png"
import buzzClip from "./buzz.png"



function App() {
  return (
    <div className="content">

    <Navbar />
     
      <Routes>
        <Route exact path='/insights' element={<Insights text=" Insights" />}></Route>
        <Route exact path='/' element={<Home text="Welcome!"/>}></Route>
        <Route exact path='/personas' element={<Personas />}></Route>
        <Route exact path='/reflection' element={<Reflection text=" Reflection" />}></Route>

        <Route exact path='/persona1' element={<Persona name=" Outgoing Oswald"  url={oswaldClip}/>}></Route>
        <Route exact path='/persona2' element={<Persona name=" Creative Candice" url={candiceClip}/>}></Route>
        <Route exact path='/persona3' element={<Persona name=" By-The-Book Buzz" url={buzzClip}/>}></Route>








      </Routes>

    
    </div>
  );
}

export default App;
