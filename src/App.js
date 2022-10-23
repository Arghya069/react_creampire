import './App.css';
import NavBar from './components/NavBar';
import Caraousal from './components/Caraousal';
import Item_p from './components/Item_p';
import Review from './components/Review';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />      
      <Caraousal />
      <Item_p  />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
