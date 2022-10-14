import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';

function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details/:CountryId" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
