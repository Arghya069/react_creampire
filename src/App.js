import './App.css';
import NavBar from './components/NavBar';
import Caraousal from './components/Caraousal';
import Item_p from './components/Item_p';
import Review from './components/Review';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Product from './components/Product';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/product" element={<Product />}/>
          <Route path="/" element={<Caraousal />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
