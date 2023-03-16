import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Outlet';
import Home from './pages/home';
import Appoinments from './pages/appoinments';
import Blogs from './pages/blogs';
import Admin from './pages/admin';
import Customer from './pages/customer';
import Subscriber from './pages/subscriber';
import Profile from './pages/profile';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='appoinments' element={<Appoinments />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='admin' element={<Admin />} />
            <Route path='customer' element={<Customer />} />
            <Route path='subscriber' element={<Subscriber />} />
            <Route path='profile' element={<Profile />} />
          </Route>

        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App;
