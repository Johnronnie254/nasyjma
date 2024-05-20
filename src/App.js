import NavBar from "./NavBar";
import Home from './Home'
import Aboutus from "./AboutUs";
import Contactus from "./Contactus";
import Products from "./Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
        <div>
          <NavBar />
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contactus" element={<Contactus />} />


            </Routes>

        </div>
    </Router>
    
    </>
  );
}

export default App;
