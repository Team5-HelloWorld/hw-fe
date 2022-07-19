import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swal from 'sweetalert';
import { subDays, addDays } from 'date-fns';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function Exercise({userId}) {
    var link = document.location.href; 
    let id = link.slice(-1);
    const email = sessionStorage.getItem('sessionVal');

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const rsdate1= startDate.getFullYear();
    const rsdate2 = startDate.getMonth() + 1;
    const rsdate3 = startDate.getDate();

    const redate1 = endDate.getFullYear();
    const redate2 = endDate.getMonth() + 1;
    const redate3 = endDate.getDate();

    const rentalStartDate = rsdate1 + "-" + rsdate2 + "-" + rsdate3;
    const rentalEndDate = redate1 + "-" + redate2 + "-" + redate3;

    const [bookedDate, setBookedDate] = useState([]);

    const DATE_FORMAT = 'yyyy년 MM월 dd일';

    // 요청하기 버튼
    // 상품id, 회원id, 대여시작일, 대여종료일 넘기기 (POST)
    // 요청하기 성공시 swal 후 페이지 이동
    async function postProduct() {
        let data = {id, email, rentalStartDate, rentalEndDate}

        let result = await fetch('http://localhost:8080/rental/request', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            }
        })
        result = await result.json();

        if(result.status === "6000") {
            swal("대여 요청이 성공적으로 이루어졌습니다.");
            sessionStorage.setItem("sessionVal3", "9999");
        } else if(result.status === "6001") {
            swal("대여 요청에 실패하였습니다.");
        } else {
            swal("한 상품에 대해서 한번의 요청만 가능합니다.")
        }
    }

    useEffect(() => {
        window
        .fetch(`http://localhost:8080/products/${id}`)
        .then((res) => res.json())
        .then((info) => {
            setData(info);
            setLoading(false);
        })
        .catch((err) => {
            setError(err);
            setLoading(false);
        });
    }, [userId])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    let priceUnit = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    let rentListStart = [];
    let rentListEnd = [];

    for (let i = 0; i < data.rentPeriod.length; i++) {
        rentListStart.push(data.rentPeriod[i].rentalStartDate);
        rentListEnd.push(data.rentPeriod[i].rentalStartDate);
    }

    console.log(rentListStart[0]);

    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];

    for (let i = 0; i < data.rentPeriod.length; i++) {
        arr1.push(data.rentPeriod[i]);
    }
    for (let i = 0; i < data.review.length; i++) {
        arr2.push(data.review[i]);
    }
    for (let i = 0; i < data.review.length; i++) {
        arr3.push(data.review[i]);
    }
    for (let i = 0; i < data.review.length; i++) {
        arr4.push(data.review[i]);
    }
    const list2 = arr2.map((email) => (<p>{email.email}</p>))
    const list3 = arr2.map((email) => (<p>{email.review}</p>))
    const list4 = arr3.map((email) => (<p>{email.grade}</p>))

    return(
        <div> 
            <div className="container py-5">
                <div className="row py-4">
                    <div>
                    <hr/>
                </div>
                <div className="col-md-6">
                    <img src={data.imageUrl} alt={data.name} height="600px" width="600px" />
                </div>
                <div className="col-md-6">
                    <h3>상품명: {data.name}</h3><br/>
                    <p className="lead fw-bolder">
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        가격: {priceUnit}원
                    </h3>
                    <p className="lead">
                        {data.goodsInfo}
                    </p>

                    <br/>
                    <div className="display-6 fw-bold my-4">
                        <h3>대여기간 선택</h3>
                        <hr/>
                        <div>
                            <h3>대여 시작일</h3>
                            <ReactDatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            minDate={new Date}
                            // dateFormat={DATE_FORMAT}
                            // excludeDates={[data.rentPeriod[0].rentalStartDate]}
                            // excludeDateIntervals={[{
                            //     start: rentListStart[0],
                            //     end: rentListEnd[0]
                            // }]}
                            />
                            <h3>대여 종료일</h3>
                            <ReactDatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            />
                        </div>
                    </div>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={postProduct}>
                        요청하기
                    </button>
                </div>
                <br/><br/>

                    <div> 
                        <br/><br/><br/><br/>
                        <h2>리뷰</h2><hr/>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell align="left">작성자</StyledTableCell>
                                    <StyledTableCell align="center">내용</StyledTableCell>
                                    <StyledTableCell align="right">별점</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {data.review.map((data) => ( 
                                    <StyledTableRow key={data.name}>
                                        <StyledTableCell component="th" scope="row">{data.email}</StyledTableCell>
                                        <StyledTableCell align="center">{data.review}</StyledTableCell>
                                        <StyledTableCell align="right">{data.grade}</StyledTableCell>
                                    </StyledTableRow>
                                ))}

                                    {/* <StyledTableRow key={data.name}>
                                    <StyledTableCell component="th" scope="row">{list2}</StyledTableCell>
                                    <StyledTableCell align="center">{list3}</StyledTableCell>
                                    <StyledTableCell align="right">{list4}</StyledTableCell>
                                    </StyledTableRow> */}
                                </TableBody>
                            </Table>
                        </TableContainer>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Exercise