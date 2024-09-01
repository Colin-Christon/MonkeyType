
import './App.css';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './components/Navbar'
import Navbar from './components/Navbar';
import Options from './components/Options';
import TextAreaWithRestart from './components/TextArea';
import Twitter   from './components/Twitter';

function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Options/>}></Route>
          <Route path="/twitter" element={<Twitter/>}></Route>
        </Routes>
        <TextAreaWithRestart/>
        <Footer/>
    </Router>
    </>
  );
}

export default App;
