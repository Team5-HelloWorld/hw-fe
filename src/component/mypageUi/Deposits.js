import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

const today = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  let dayOfWeek = week[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return year + '.' + month + '.' + day + ' ' + dayOfWeek + hours + ':' + minutes;
} 

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>총 대여금액</Title>
      <br/>
      <Typography component="p" variant="h4">
        000 ₩
      </Typography>
      <br/><br/>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {today()}
      </Typography>
    </React.Fragment>
  );
}
