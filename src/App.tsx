import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import { Home } from './pages/home/Home';
import { Task } from './pages/task/Task';
import { TimerPage } from "./pages/timer/TimerPage"


function App() {
  const [theme, setTheme] = useState<boolean>(false)

  return (
    <div className="App">
      <input type='checkbox' checked={theme} id='theme' />
      <div style={{
        background: '#FFF',
        minHeight: '100vh'
      }}>
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/task' element={<Task />} />
          <Route path='/timer/:id' element={<TimerPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
