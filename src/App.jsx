import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './pages/homepage';
import {CreateEmployeePage} from './pages/createemployeepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreateEmployeePage/>} />
      </Routes>
    </Router>
  );
}

export default App
