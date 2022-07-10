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

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };
const theme = createTheme();

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
        // navigate("/");
        window.location.href = "/mypage";
      }
      else {
        swal("입력한 비밀번호가 잘못되었습니다.")
      }
    }
  }

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
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              회원정보 수정
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="이메일"
                name="email"
                autoComplete="email"
                // onChange={e => setEmail(e.target.value)}
              /> */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="기존 비밀번호"
                type="password"
                id="password"
                onChange={e => setCurrentPassword(e.target.value)}
                autoComplete="current-password"
                autoFocus
              />
               <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="새로운 비밀번호"
                type="password"
                id="password"
                onChange={e => setNewPassword(e.target.value)}
                autoComplete="new-password"
              />  
               <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="새로운 비밀번호 확인"
                type="password"
                id="password"
                onChange={e => setNewPasswordConfirm(e.target.value)}
                autoComplete="confirm-new-password"
              />  
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={changeUserInfo}
              >
                회원정보 수정
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default MypageForm;