import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './containers/Home';
import CategoriesContainer from './containers/CategoriesContainer';
import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/categories' element={<CategoriesContainer />}/>
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
