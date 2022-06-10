
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { Home } from './pages/home/Home';
import { Task } from './pages/task/Task';
import {TimerPage} from "./pages/timer/TimerPage"

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task' element={<Task />} />
        <Route path='/timer/:id' element={<TimerPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
