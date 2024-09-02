
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Options from './components/Options';
import Twitter   from './components/Twitter';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Hero from './components/Hero';

function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Options/>}></Route>
          <Route path="/twitter" element={<Twitter/>}></Route>
        </Routes>
        <Hero/>
        <Footer/>
    </Router>
    </>
  );
}

export default App;
