import React from 'react'
import {NavLink} from 'react-router-dom';
import {useSelector} from "react-redux";

export default function Navbar() {

    const state = useSelector((state) => state.handleCart)
    const token = localStorage.getItem('accessToken');

    function sessionChange() {
        if(token) {
            const sub = document.getElementsById("login");
                sub.innerText="로그아웃";
        }
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
            <NavLink className="navbar-brand fw-bold fs-4" to="/">Happy Camping</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/products">Product</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/mypage">Mypage</NavLink>
                </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className="buttons"> 
                <NavLink to="/login" className="btn btn-outline-dark login">
                    <i className="fa fa-sign-in me-1" onClick={sessionChange}> 로그인</i>
                </NavLink>
                <NavLink to="/register" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user-plus me-1"> 회원가입</i>
                </NavLink>
                {/* <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart me-1"> 장바구니 ({state.length})</i>
                </NavLink> */}
                {/* <button>로그아웃</button> */}
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}
