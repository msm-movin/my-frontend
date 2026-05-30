import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
// Apne pages ko sahi path se import karein
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserView from './pages/UserView';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/userlist' element={<UserView />} />
        <Route path="*" element={<Home />} />

      </Routes>
    </>
  );
}

export default App;