import React from 'react'
import { NavLink } from 'react-router-dom'

const Rent = () => {
  return (
    <div>
        <div className="buttons py-5 ms-5"> 
            <NavLink to="/revise" className="btn btn-outline-dark ms-5 mx-5">
                <i className="fa fa-sign-in me-1"> 회원정보 수정</i>
            </NavLink>
            <NavLink to="/rent" className="btn btn-outline-dark ms-2 mx-5">
                <i className="fa fa-user-plus me-1"> 임차품목</i>
            </NavLink>
            <NavLink to="/borrow" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"> 임대품목</i>
            </NavLink>
        </div>
        <div>
            <h1>임차 품목</h1>
            <hr/>
            <div className="d-flex ms-5 pb-5">
                <div className="col-md-6">
                    <img src="/assets/img1.jpg" alt="bg" height="400px" width="400px" />
                </div>
                <div className="col-md-6 2">
                    <h1 className="display-5">상품명: xxxx</h1>
                    <p className="lead fw-bolder">
                        별점: 3.5
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        가격: 0000
                    </h3>
                    <p className="lead">
                        상세정보: xxxxx
                    </p>
                    <button className="btn btn-outline-dark px-4 py-2">
                        리뷰 남기기
                    </button>
                        {/* <button className="btn btn-outline-dark px-4 py-2" 
                        onClick={() => addProduct(product)}>
                            Add to Cart
                        </button> */}
                </div>
            </div>
            

            <h1>임차 요청중</h1>
            <hr/>

        </div>
    </div>
    )
}

export default Rent