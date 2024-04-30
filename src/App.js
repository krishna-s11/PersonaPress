import './App.css';
import {Routes,Route} from "react-router-dom"
import Homepage from './pages/Homepage/Homepage';
import NewsGeneral from './pages/NewsGeneral/NewsGeneral';
import NewsDetail from './pages/NewsDetail/NewsDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/news/:category' element={<NewsGeneral />}/>
        <Route path='/news' element={<NewsDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
