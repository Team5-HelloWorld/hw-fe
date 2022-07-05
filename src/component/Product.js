import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {addCart} from '../redux/action';
import Skeleton from 'react-loading-skeleton';
import {useParams} from 'react-router';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DatePickerOne from './DatePickerOne';
import Review from './Review';

// 리뷰 테이블
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

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const [review, setReview] = useState([]);
    const [result1, setResult1] = useState([]);
    const [result2, setResult2] = useState([]);
    const [result3, setResult3] = useState([]);


    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }


    useEffect(() => {

        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:8080/products/${id}`)
            setProduct(await response.json());
            setLoading(false);
            setReview(product.review);
            
            // if(product.review && product.review.length > 0) {
            //     setReview(product?.review);
            // }
            for(var i = 0; i < review.length; i++) {
                setResult1(review[i].email);
                setResult2(review[i].review);
                setResult3(review[i].grade);
            //     // const result2 = review[i].review;
            //     // const result3 = review[i].grade;
            //     // setResult1(result1)
            //     // setResult2(result2)
            //     // setResult3(result3)
            //     // console.log(result1);
            // }
        }
    }
    getProduct();
    }, );
    
    // function getReview() {
    //     for(var i = 0; i < review.length; i++) {
    //         setResult1(review[i].email);
    //         setResult2(review[i].review);
    //         setResult3(review[i].grade);
    // }}
    // getReview();
        // console.log(result1);
        // console.log(result2);
        // console.log(result3);


    // 리뷰데이터 정리
    // const reviewOrigin = product.review;
    // setEmail = reviewOrigin.email;
    
    // const Loading = () => {
        //     return(
            //         <>
    //             <div className="col-md-6">
    //                 <Skeleton height={400} />
    //             </div>
    //             <div className="col-md-6" style={{lineHeight:2}}>
    //                 <Skeleton height={50} width={300} />
    //                 <Skeleton height={75} />
    //                 <Skeleton height={25} width={150}/>
    //                 <Skeleton height={50} />
    //                 <Skeleton height={150} />
    //                 <Skeleton height={50} width={100} />
    //                 <Skeleton height={50} width={100} style={{marginLeft:6}} />
    //             </div>
    //         </>
    //     )
    // }

    const ShowProduct = () => {
        return(
            <>
                <div className="col-md-6">
                    <img src={product.imageUrl} alt={product.name} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    {/* <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4> */}
                    <h1 className="display-5">{product.name}</h1>
                    <p className="lead fw-bolder">
                        조회수 : {product.reviews}
                        {/* <i className="fa fa-star"></i> */}
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        {product.price} 원
                    </h3>
                    <p className="lead">
                        {product.goodsInfo}
                    </p>

                    <button className="btn btn-outline-dark px-4 py-2" 
                    onClick={() => addProduct(product)}>
                        요청하기
                    </button>
                </div>
            </>
        )
    }
    

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {/* {loading ? <Loading/> : <ShowProduct/>} */}
                    {<ShowProduct/>}
                    
                    <h3 className="display-6 fw-bold my-4">
                        <DatePickerOne/>
                    </h3>

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
                                    <StyledTableRow key={product.price}>
                                    <StyledTableCell component="th" scope="row">{result1}</StyledTableCell>
                                    <StyledTableCell align="right">{result2}</StyledTableCell>
                                    <StyledTableCell align="right">{result3}</StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {/* <Review/> */}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Product