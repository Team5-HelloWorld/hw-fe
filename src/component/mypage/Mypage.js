import React, { useState } from "react";
import axios from "axios";
import {} from "jquery.cookie";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import Dashboard from "../mypageUi/Dashboard";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };
const theme = createTheme();

const navigate = useNavigate;

const handleSubmit = (event) => {
  event.preventDefault();
}

const MypageForm = () => {
  const divStyle = {
    margin: 50
  };

  const email = sessionStorage.getItem('sessionVal');
  const name = sessionStorage.getItem('sessionVal2');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  
  async function changeUserInfo() {
    
    
    if(newPasswordConfirm !== newPassword) {
      swal("새 비밀번호가 다릅니다")
    }
    else {
      let data = {email, currentPassword, newPassword}
      
      let result = await fetch('http://localhost:8080/member', {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json"
        }
      })
      result = await result.json();
      console.log("result", result);

      if(result.status === "7000") {
        swal("비밀번호 변경에 성공하였습니다.!", {
          // buttons: false,
          timer: 4000
        })
        // navigate("/rent");
        window.location.href = "http://localhost:3000/rent";
      }
      else {
        swal("입력한 비밀번호가 잘못되었습니다.")
      }
    }
  }

  return (
    <>
      <Dashboard/>
    </>
  );
};

export default MypageForm;