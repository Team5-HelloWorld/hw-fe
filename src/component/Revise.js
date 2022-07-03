import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
import { NavLink } from "react-router-dom";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

const Revise = () => {
  const divStyle = {
    margin: 50
  };

  // 회원정보 수정
  // async function updateInfo() {

  //   const data = { 
  //     email: email,
  //     password: password,
  //     newpassword: newpassword
  //   }

  //   let result = await fetch("https://", {
  //     method: "PUT",
  //     body: JSON.stringify(),
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     data: data
  //   })
  //   result = await result.json();
  //   console.log("result", result);
  // }

  return (
    <>
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
    </div>
      <div style={divStyle}>
      <Form.Group controlId="formBasicEmail">
        {/* <Form.Label>email</Form.Label>
        <Form.Control type="email" disabled value={$.cookie("login_email")}/>
        <Form.Label>name</Form.Label> */}
        {/* {<Form.Control type="text" placeholder="Enter email" />} */}

        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
        <Form.Label>new password</Form.Label>
        <Form.Control type="password" placeholder="Enter New Password" />

        {/* <Form.Label>new password check</Form.Label>
        <Form.Control type="password" placeholder="Enter New Password Check" /> */}
      </Form.Group>
      <br/>
      <Button variant="primary py-1" block>회원정보 수정</Button>
      <Button variant="primary py-1" block>회원 탈퇴</Button>
      </div>
    </>
  );
};

export default Revise;