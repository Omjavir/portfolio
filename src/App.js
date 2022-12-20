import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects'

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
