import logo from './logo.svg';
import NavbarHeader from './NavbarHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pages/Skills" element={<Skills />}></Route>
        <Route path="/pages/Contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
