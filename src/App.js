import './App.css';
import {Routes,Route} from "react-router-dom"
import Homepage from './pages/Homepage/Homepage';
import NewsGeneral from './pages/NewsGeneral/NewsGeneral';
import NewsDetail from './pages/NewsDetail/NewsDetail';
import Login from './pages/Login/Login';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/news/:category' element={<NewsGeneral />}/>
        <Route path='/news' element={<NewsDetail />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/feed' element={<AuthProvider><Login /></AuthProvider>}/>
      </Routes>
    </div>
  );
}

export default App;
