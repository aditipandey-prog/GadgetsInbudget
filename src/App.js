import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import CompareProducts from './Pages/CompareProducts';
import Contact from './Pages/Contact';
import Forgotpassword from './Pages/Forgotpassword';
import Home from './Pages/Home';
import Login from './Pages/Login';
import OurStore from './Pages/OurStore';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ResetPassword from './Pages/ResetPassword';
import ReturnPolicy from './Pages/ReturnPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import SingleBlog from './Pages/SingleBlog';
import SingUp from './Pages/SingUp';
import Wishlist from './Pages/Wishlist';
import TermsAndConditions from './Pages/TermsAndConditions';
import SingleProduct from './Pages/SingleProduct';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/product' element={<OurStore/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='blogs/:id' element={<SingleBlog/>}/>
            <Route path='product/:id' element={<SingleProduct/>}/>
            <Route path='/compare-product' element={<CompareProducts/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot-password' element={<Forgotpassword/>}/>
            <Route path='/singup' element={<SingUp/>}/>
            <Route path='/reset-password' element={<ResetPassword/>}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='/return-policy' element={<ReturnPolicy/>}/>
            <Route path='/shipping-policy' element={<ShippingPolicy/>}/>
            <Route path='/terms-condition' element={<TermsAndConditions/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
