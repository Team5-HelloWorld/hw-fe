import React, { useState, useEffect } from "react";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import './styles_order.css'

function Orders({ userId }) {
    
  const email = sessionStorage.getItem('sessionVal');

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
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
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <React.Fragment>
      <Title>최근 거래 목록</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>상품번호</TableCell>
            <TableCell>상품명</TableCell>
            <TableCell>가격</TableCell>
            <TableCell align="center">대여기간</TableCell>
            <TableCell align="right">상태</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.lendInfo ? (
            user.lendInfo.map((data) => (
                  <TableRow key={data.id}>
                      <TableCell>{data.id + " - 임대"}</TableCell>
                      <TableCell>{data.name}</TableCell>
                      <TableCell>{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ "원"}</TableCell>
                      <TableCell align="center">{data.rentalStartDate} ~ {data.rentalEndDate}</TableCell>
                      <TableCell align="right">{data.rentStatus}</TableCell>
                  </TableRow>
              ))
          ) : (
            <div> 
            </div>
          )}
          {user.rentInfo ? (
            user.rentInfo.map((data) => (
                  <TableRow key={data.id}>
                      <TableCell>{data.id + " - 임차"}</TableCell>
                      <TableCell>{data.name}</TableCell>
                      <TableCell>{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ "원"}</TableCell>
                      <TableCell align="center">{data.rentalStartDate} ~ {data.rentalEndDate}</TableCell>
                      <TableCell align="right">{data.rentStatus}</TableCell>
                  </TableRow>
              ))
          ) : (
            <div> 
            </div>
          )}
        </TableBody>
      </Table>
      <br/><br/>
      <p id="pwhite" align="center">상태는 (01: 요청중, 02: 대여중, 03: 대여완료, 04: 대여거절)을 의미합니다.</p>
    </React.Fragment>
  );
}

export default Orders;