import './App.css';
import { Routes, Route } from "react-router-dom";
import NewsItem from './components/NewsItem';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
       <Navbar ></Navbar>
        <Routes>
          <Route path='/' element={<NewsItem />} />
      </Routes>
    </>
  );
}

export default App;
