
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Rankings from './pages/Rankings'
import Profile from './pages/Profile'
import Categories from './pages/Categories'


function App() {
  return (
    <Router>
      <div>
        {/* Add your Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

        

export default App
