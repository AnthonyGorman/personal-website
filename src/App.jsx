import './App.css';
import { Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header/Header';
import Poetry from './poetry/Poetry';  // Adjusted path
import Resume from './resume';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/personal-website" element={<Body />} />
        <Route path="/poetry" element={<Poetry />} />
        <Route path='/resume' element={<Resume style="resume" />} />
      </Routes>
    </div>
  );
}

export default App;
