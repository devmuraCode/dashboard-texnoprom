import { Suspense } from 'react'
import * as Layouts from '@/layouts';
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import routes from './layouts/Main/routes';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  

  return (
    <Layouts.Main>
      <Suspense fallback=''>
        <Routes>
          {routes.map(({ path }) => (
            <Route key={path} path={path} element={<Dropdown/>} />
          ))}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </Layouts.Main>
  )
}

export default App
