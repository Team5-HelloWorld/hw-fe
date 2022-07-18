import React, { useEffect, useState } from "react";
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
import { mainListItems, secondaryListItems } from './mypageUi/listItems';
import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MuiDrawer from '@mui/material/Drawer';

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

function Exercise3({userId}) {

    const email = sessionStorage.getItem('sessionVal');
    
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
      let data = {email};
      
      window
      .fetch(`http://localhost:8080/mypage/lendinfo`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json"
        }
      })
      .then((res) => res.json())
        .then((info) => {
            setData(info);
            setIsLoaded(false);
        })
        .catch((err) => {
            setError(err);
            setIsLoaded(false);
        });
      }, [userId])

      if (isLoaded) return <p>Loading...</p>;
      if (error) return <p>Error!</p>;
      
      // 받아올 정보(요청중, 대여중)
      // 01-요청중, 02-대여중, 03-반납완료
      let clone1 = data.filter(v => v.rentStatus === "01");
      const list1 = 
      clone1.map((data) => (
        <div>
                  <div className="d-flex ms-5 pb-5">
                      <img src={data.imageUrl} alt="bg" height="150px" width="150px"/>
                      <div className="ms-5 mx-5 ">
                          <p>상품명: {data.name}</p>
                          <p>요청자: {data.borrowerEmail}</p>
                          <p>대여기간: {data.rentalStartDate} 부터 {data.rentalEndDate}</p>
                          <button className="btn btn-outline-dark px-4 py-2" onClick={

                            // 수락버튼
                            // 상품id, 회원id, 임차인id, 대여시작일, 대여종료일 넘기기 (POST)
                            async function postAccept() {
                              let info = {
                                email: email, 
                                borrowerEmail: data.borrowerEmail,
                                id: data.id,
                                rentalStartDate: data.rentalStartDate,
                                rentalEndDate: data.rentalEndDate
                              }
                              console.log(info);
                      
                              let result = await fetch('http://localhost:8080/rental/accept', {
                                  method: "POST",
                                  body: JSON.stringify(info),
                                  headers: {
                                      'Content-Type': 'application/json',
                                      "Accept": "application/json"
                                  }
                              })
                              result = await result.json();
                              console.log(result);
                              if(result.status === "6000") {
                                  swal("해당 대여요청을 수락했습니다.")
                              }else {
                                  swal("해당 대여요청 수락에 실패하였습니다.")
                                  }
                            }
                          }>
                              수락
                          </button>
                          <button className="btn btn-outline-dark px-4 py-2" onClick={
                            // 수락버튼
                            // 상품id, 회원id, 임차인id, 대여시작일, 대여종료일 넘기기 (POST)
                            async function postAccept() {
                              let info = {
                                email: email, 
                                borrowerEmail: data.borrowerEmail,
                                id: data.id,
                                rentalStartDate: data.rentalStartDate,
                                rentalEndDate: data.rentalEndDate
                              }
                              console.log(info);
                      
                              let result = await fetch('http://localhost:8080/rental/reject', {
                                  method: "POST",
                                  body: JSON.stringify(info),
                                  headers: {
                                      'Content-Type': 'application/json',
                                      "Accept": "application/json"
                                  }
                              })
                              result = await result.json();
                              console.log(result);
                              if(result.status === "6000") {
                                  swal("해당 대여요청을 거절했습니다.")
                              }else {
                                  swal("해당 대여요청 거절에 실패하였습니다.")
                                  }
                            }
                          }>
                              거절
                          </button>
                      </div>
                  </div>
          </div>
      ))

    let clone2 = data.filter(v => v.rentStatus === "02");
    const list2 = 
      clone2.map((data) => (
          <div>
                  <div className="d-flex ms-5 pb-5">
                      <img src={data.imageUrl} alt="bg" height="150px" width="150px"/>
                      <div className="ms-5 mx-5 ">
                          <p>상품명: {data.name}</p>
                          <p>요청자: {data.borrowerEmail}</p>
                          <p>대여기간: {data.rentalStartDate} 부터 {data.rentalEndDate}</p>
                      </div>
                  </div>
          </div>
      ))

    let clone3 = data.filter(v => v.rentStatus === "03");
    const list3 = 
      clone3.map((data) => (
          <div>
                  <div className="d-flex ms-5 pb-5">
                      <img src={data.imageUrl} alt="bg" height="150px" width="150px"/>
                      <div className="ms-5 mx-5 ">
                          <p>상품명: {data.name}</p>
                          <p>요청자: {data.borrowerEmail}</p>
                          <p>대여기간: {data.rentalStartDate} 부터 {data.rentalEndDate}</p>
                      </div>
                  </div>
          </div>
      ))

    return(
        <>
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

            <Box sx={{ 
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: 5
                }}> 
                <div>
                    <h3>임대중 품목</h3>
                    <hr/>
                    {list2}
         
                    <h3>임대 요청중</h3>
                    <hr/>
                    {list1}

                    <h3>임대 완료</h3>
                    <hr/>
                    {list3}
                </div>
            </Box>

            </Box>
          </ThemeProvider>
        </div>
        </>
    );
}

export default Exercise3