// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hello from './Hello/Hello'; // Update the import paths
import Signup from './Signup/Signup';
import PageNotFound from './PageNotFound/PageNotFound';



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
