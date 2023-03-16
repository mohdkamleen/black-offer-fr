import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Outlet';
import Home from './pages/home'; 
import Blogs from './pages/blogs';
import Admin from './pages/admin';
import Customer from './pages/customer';
import Subscriber from './pages/subscriber';
import Data from './pages/data';
import { useDispatch } from 'react-redux';
import { FetchData } from './redux/slice/data';
import { useEffect } from 'react';


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(FetchData())
  }, [])
  
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Home />} /> 
            <Route path='blogs' element={<Blogs />} />
            <Route path='admin' element={<Admin />} />
            <Route path='customer' element={<Customer />} />
            <Route path='subscriber' element={<Subscriber />} />
            <Route path='data' element={<Data />} />
          </Route>

        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App;
