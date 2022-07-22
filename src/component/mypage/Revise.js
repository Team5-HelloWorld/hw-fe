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
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import swal from 'sweetalert';
import { Divider, IconButton, Toolbar } from "@mui/material";
import { mainListItems, secondaryListItems } from '../mypageUi/listItems';
import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MuiDrawer from '@mui/material/Drawer';
import SignIn from "../auth/Signin";

// axios.defaults.withCredentials = true;
// const headers = { withCredentials: true };

const drawerWidth = 240;
const mdTheme = createTheme();

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const handleSubmit = (event) => {
  event.preventDefault();
}

function ReviseContent() {
  const divStyle = {
    margin: 50
  };
  const email = sessionStorage.getItem('sessionVal');
  const name = sessionStorage.getItem('sessionVal2');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
      setOpen(!open);
    };

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
      {email ? (
        <div style={{
          justifyContent: 'center',
        }}>
            <div> 
            <ThemeProvider theme={mdTheme}>
              <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Drawer variant="permanent" open={open}>
                  <Toolbar
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      px: [1],
                    }}
                  >
                    <IconButton onClick={toggleDrawer}>
                      {/* <ChevronLeftIcon /> */}
                    </IconButton>
                  </Toolbar>
                  <Divider />
                  <List component="nav">
                    {mainListItems}
                    <Divider sx={{ my: 1 }} />
                    {secondaryListItems}
                  </List>
                </Drawer>
                <Box
                      sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginLeft: 50
                      }}
                    >
                      <Typography component="h1" variant="h5">
                        회원정보 수정
                      </Typography>
                      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                  </Box>
              </ThemeProvider>
            </div>
        </div>
      ) : (
        swal("올바르지 않은 요청입니다"), 
      <SignIn/>
      )}

  </>
    );
};

export default function Revise() {
  return <ReviseContent />;
}