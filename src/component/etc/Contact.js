import React from 'react'

const Contact = () => {
  return (
    <div className="row">
            <div className="column">
                <div className="card">
                {/* <img src="/assets/img1.jpg" alt="Jane" height="300px" width="600px"/> */}
                <br/>
                    <div className="container d-flex">
                        <div> 
                            <img src="/assets/김민준.jpg" alt="Jane" height="300px" width="300px"/>
                        </div>
                        <div className="detail mt-5 ms-5"> 
                            <h2 className="team-name fw-bolder">김민준</h2>
                            <p className="title">Back server manager</p>
                            <p>안정된 서버를 통해 쾌적한 소통을 돕겠습니다.</p>
                            <p>https://github.com/mjkim8764</p>
                            <br/>
                        </div>
                    </div>
                    <div className="container d-flex">
                        <div>
                            <img src="/assets/진미란.jpg" alt="Jane" height="300px" width="300px"/>
                        </div>
                        <div className="detail mt-5 ms-5">
                            <h2 className="team-name fw-bolder">진미란</h2>
                            <p className="title">Data processing manager</p>
                            <p>최적의 데이터로 최고의 효울을 내겠습니다.</p>
                            <p>https://github.com/serena-jin</p>
                            <br/>
                        </div>
                    </div>
                    <div className="container d-flex">
                        <div>
                            <img src="/assets/이정훈.jpg" alt="Jane" height="300px" width="300px"/>
                        </div>
                        <div className="detail mt-5 ms-5">
                            <h2 className="team-name fw-bolder">이정훈</h2>
                            <p className="title">Frontend manager</p>
                            <p>편리한 기능으로 사용성을 높이겠습니다.</p>
                            <p>https://github.com/nnn991</p>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact