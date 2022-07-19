import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar() {

    const sessionValue = sessionStorage.getItem('sessionVal');
    
    const onClickHandler = () => {
        sessionStorage.removeItem('sessionVal');
        sessionStorage.removeItem('sessionVal2');
        sessionStorage.removeItem('sessionVal3');
        sessionStorage.removeItem('sessionValId');
        window.location.href = "/";
    }

  return (
    (() => {
        if(sessionValue !== null){
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
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
            
                            <div className="buttons"> 
                                <NavLink to="/mypage" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-shopping-cart me-1"> 마이페이지</i>
                                </NavLink>
                                <button className="btn btn-outline-dark logout ms-2" onClick={onClickHandler}>
                                <i class="fa fa-sign-out" aria-hidden="true"> 로그아웃</i>
                                </button>
                            </div>
                        </div>
                    </div>
                    </nav>
                </div>
                    )} else {
                        return(
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
                                       
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>

                                    <div className="buttons"> 
                                        <NavLink to="/login" className="btn btn-outline-dark login">
                                            <i className="fa fa-sign-in me-1"> 로그인</i>
                                        </NavLink>
                                        <NavLink to="/register" className="btn btn-outline-dark ms-2">
                                            <i className="fa fa-user-plus me-1"> 회원가입</i>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            </nav>
                        </div>
                        )
                    }
                })
            ()
        )}
            