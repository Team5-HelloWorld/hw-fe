import React, { useState, useEffect} from 'react';
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

  return year + '.' + month + '.' + day + ' ' + dayOfWeek + ' ' + hours + ':' + minutes;
} 

export default function Deposits(userId) {

    const email = sessionStorage.getItem('sessionVal');
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
      let data = {email};
      
      window
      .fetch(`http://localhost:8080/mypage/overview`, {
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
      console.log(data);
      
      if (isLoaded) return <p>Loading...</p>;
      if (error) return <p>Error!</p>;

  return (
    <React.Fragment>
      <Title>총 소비금액</Title>
      <Typography component="p" variant="h4">
        {data.rentPriceSum} 원
      </Typography>
      <br/>
      <Title>총 대여수익</Title>
      <Typography component="p" variant="h4">
        {data.lendPriceSum} 원
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {today() + " 기준"}
      </Typography>
    </React.Fragment>
  );
}
