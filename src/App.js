import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar';
import Colleges from './components/Colleges'
import States from './components/States'
import Blogs from './components/Blogs'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Collegescreen from './Screens/Collegescreen';
import Homescreen from './Screens/Homescreen';
import Collegelistscreen from'./Screens/Collegelistscreen'
import Addcommentscreen from './Screens/Addcommentscreen'
import Addclgscreen from './Screens/Addclgscreen'
function App() {
  return (
    
<Router>
          
      
          <Routes>
          <Route path="/" exact element={<Homescreen/>}/>
          <Route path="/Review/:id" element={<Collegescreen/>}/>
          <Route path="/colleges" element={<Collegelistscreen/>}/>
          <Route path="/Addcollege" element={<Addclgscreen/>}/>
          <Route path="/Addcomment" element={<Addcommentscreen/>}/>
          
  
  
          </Routes>
          
       
          </Router>
  );
}

export default App;
