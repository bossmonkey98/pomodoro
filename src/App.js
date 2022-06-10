
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { Home } from './pages/home/Home';
import { Task } from './pages/task/Task';

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/task' element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
