import MenuData from "./components/MenuData";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import News from "./Routes/News";
import Upcoming from "./Routes/Upcoming";
import Reviews from "./Routes/Reviews";
 function App () {
  return (
  <div className="App">
     <Routes>
  <Route path="/Contact" element={<Contact/>} />
  <Route path="/" element={<Home/>} />
  <Route path="/News" element={<News/>} />
  <Route path="/Reviews" element={<Reviews/>} />
  <Route path="/Upcoming" element={<Upcoming/>} />

     </Routes>


     
    
      </div>
    
  );
}

export default App;

