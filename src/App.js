import './App.css';
import Home from './component/Home';
import Home2 from './component/Home2';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
// import Products from './component/Products';
import Product from './component/Product';
import SignIn from './component/Signin';
import SignUp from './component/Signup';
import MypageForm from './component/Mypage';
import Revise from './component/Revise';
import Rent from './component/Rent';
import Borrow from './component/Borrow';
import About from './component/About';
import Contact from './component/Contact';
import ProductsAll from './component/ProductsAll';
import Register from './component/Signup2';
import Signin2 from './component/Signin2';
// import Profile from './component/Profile';

function App() {
  // const token = localStorage.getItem('accessToken');

  // if(!token) {
  //   return <SignIn />
  // }

  return (
    <>
      <Navbar/>
    {/* <BrowserRouter> */}
      {/* <SignIn /> */}
        {/* <Route path="/login" element={<SignIn />} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Home2 />} /> */}
        <Route path="/products" element={<ProductsAll />} />
        <Route path="/products/:id" element={<Product />} />
        {/* <Route path="/login" element={<SignIn />} /> */}
        <Route path="/login" element={<Signin2 />} />
        <Route path="/register" element={<SignUp />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/mypage" element={<MypageForm />} />
        <Route path="/revise" element={<Revise />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/contact" element={<Profile />} /> */}
      </Routes>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
