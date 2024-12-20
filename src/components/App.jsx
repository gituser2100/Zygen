import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home'
import TestPlayground from '../pages/TestPlayground'
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import Blog from '../pages/Blog';





const App = () => {

  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/play' element={<TestPlayground />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact_us' element={<ContactUs />} />
      <Route path='/about' element={<About />} />
      <Route index element={<Home />} />
    </Route>
  ),{
    basename: '/zygen/'
  }
  );
  return (
  <div className='max-w-full bg-black'>
    <RouterProvider router={router} />;

  </div>
  )
};


export default App
