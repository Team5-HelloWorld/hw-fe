import React, { useState, useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import Title from './Title';
import './styles.css'

export default function Chart(userId) {
  const theme = useTheme();

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

  return (
    <React.Fragment>
      <div className="chart-temp">
        <div className="chartLend"> 
          <Title>임차현황</Title>
          <br/>
          <div className="col"> 
            <h4>임차요청중 {data.rentRequestTotal}</h4>
            <h4>임차중 {data.rentingTotal}</h4>
            <h4>임차완료 {data.rentCompleteTotal}</h4>
          </div>
        </div>

        <div className="chartRent"> 
          <Title>임대현황</Title>
          <br/>
          <div className="col"> 
            <h4>임대요청중 {data.lendRequestTotal}</h4>
            <h4>임대중 {data.lendingTotal}</h4>
            <h4>임대완료 {data.lendCompleteTotal}</h4>
          </div>
        </div>

        <div className="chartRent"> 
          <Title>내 평가</Title>
          <br/>
          <div className="col"> 
            <h4>평점 : {data.grade}</h4>
            <br/>
            <br/>
            <p id="pwhite" align="center">0점 = 평가 미존재</p>
          </div>
        </div>
      </div>
    
  </React.Fragment>
  );
}
