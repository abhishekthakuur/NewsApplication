import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
            <Route exact path="/" element={<News key="general" category="general"/>} />
            <Route path="/general" element={<News key="general"  category="general"/>} />
            <Route path="/business" element={<News key="business" category="business"/>} />
            <Route path="/entertainment" element={<News key="entertainment"  category="entertainment"/>} />
            <Route path="/health" element={<News key="health" category="health"/>} />
            <Route path="/science" element={<News key="science" category="science"/>} />
            <Route path="/sports" element={<News key="sports" category="sports"/>} />
            <Route path="/technology" element={<News key="technology" category="technology"/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
