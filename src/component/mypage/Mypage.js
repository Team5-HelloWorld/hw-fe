import React, { useState, useEffect } from "react";
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
import SignIn from "../auth/Signin";

// axios.defaults.withCredentials = true;
// const headers = { withCredentials: true };
// const theme = createTheme();

// const navigate = useNavigate;

// const handleSubmit = (event) => {
//   event.preventDefault();
// }

const MypageForm = () => {

  const email = sessionStorage.getItem('sessionVal');

  const divStyle = {
    margin: 50
  };

  return (
    <>
      {email ? (<Dashboard/>) : (
        swal("올바르지 않은 요청입니다"), 
      <SignIn/>
      )}
    </>
  );
};

export default MypageForm;