
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header.js';
import Home from './components/Home.js';
import SignUp from './components/SignUp.js';
import {Routes,Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Video from './components/Video';
import Fwindow from './components/Fwindow';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Video" element={<Video/>}/>
    </Routes>
    </>
  );
}

export default App;

