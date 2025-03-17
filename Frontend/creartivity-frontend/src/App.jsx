import { useState } from 'react'
import './App.css'
import IntroPage from './components/IntroPage'
import { Route, Routes , BrowserRouter} from 'react-router'
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
