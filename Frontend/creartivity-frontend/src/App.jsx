import { useState } from 'react'
import './App.css'
import IntroPage from './components/IntroPage'
import { Route, Routes , BrowserRouter} from 'react-router'
import LoginDiv from './components/Intro-page/login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<IntroPage></IntroPage>}> </Route>
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App
