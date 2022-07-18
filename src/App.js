import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Product from './component/product/Product';
import SignIn from './component/auth/Signin';
import SignUp from './component/auth/Signup';
import MypageForm from './component/mypage/Mypage';
import Revise from './component/mypage/Revise';
import Rent from './component/mypage/Rent';
import Borrow from './component/mypage/Borrow';
import About from './component/etc/About';
import Contact from './component/etc/Contact';
import ProductsAll from './component/product/ProductsAll';

function App() {

  return (
    <>
      <Navbar/>
    {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsAll />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/mypage" element={<MypageForm />} />
        <Route path="/revise" element={<Revise />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
