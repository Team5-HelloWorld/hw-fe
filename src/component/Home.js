import React from 'react'
import Products from './Products'

const Home = () => {
  return (
      <div className="hero">
        <div className="card bg-dark text-white border-0">
            <img src="/assets/bg.jpg" className="card-img" alt="background" height="550px"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">가볍게 캠핑에 도전해보세요</h5>
                    <p className="card-text lead fs-2">Happy Camping은 캠핑물품을 사용자들끼리 대여하는 서비스입니다.</p>
                    <p className="card-text">지금바로 원하는 물품을 대여해보세요!</p>
                </div>
            </div>
        </div>
        <Products/>
    </div>
  )
}

export default Home