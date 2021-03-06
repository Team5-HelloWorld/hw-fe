import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const ProductsAll = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(data);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const URL = '/home';
            // const response = await fetch("https://fakestoreapi.com/products");
            const response = await fetch("http://localhost:8080/home");
            setData(await response.clone().json());
            setFilter(await response.json());
            setLoading(false);
        }
        getProducts();
    }, []);

    const Loading = () => {
        return(
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }
    // 카테고리 분류 
    const filterProduct = (cat) => {
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList);
    }

    // 조회수별 정렬
    const sortData = () => {
        data.sort(function(a,b) {
            return parseFloat(b.reviews) - parseFloat(a.reviews);
        })
    }
    sortData();

    // 상품 카테고리별 가져오기
    const ShowProducts = () => {
        return(
            <>
            <div className="buttons d-flex justify-content-left mb-5 pb-5">
                <button className="btn btn-outline-dark me-2"
                onClick={()=> setFilter(data)}>인기상품</button>
                <button className="btn btn-outline-dark me-2"
                onClick={()=> filterProduct("tent")}>텐트</button>
                <button className="btn btn-outline-dark me-2"
                 onClick={()=> filterProduct("tarp")}>식기</button>
                <button className="btn btn-outline-dark me-2"
                 onClick={()=> filterProduct("light")}>조명</button>
                <button className="btn btn-outline-dark me-2"
                 onClick={()=> filterProduct("sleeping_bag")}>침낭</button>
                <button className="btn btn-outline-dark me-2"
                 onClick={()=> filterProduct("chair")}>의자</button>
            </div>
            {/* 상품 가져오기 */}
            {filter.map((product)=>{
            return(
                <>
                    <div className="col-md-3">
                        <div class="card h-100 text-center p-4" key={product.id}>
                            <img src={product.imageUrl} class="card-img-top" width="450" height="200" alt={product.name}/>
                            <div class="card-body">
                                <h5 class="card-title mb-0">{product.name.substring(0,12)}...</h5>
                                <p class="card-text lead fw-bold">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">상품 보기</NavLink>
                            </div>
                        </div>
                    </div>
                </>
            )
        })}
        </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-2">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-left">전체상품</h1>
                        <hr/>
                    </div>
                </div>
                <div className="row justify-content-left">
                    {loading ? <Loading/> : <ShowProducts/>}
                </div>
            </div>
        </div>
    )
}

export default ProductsAll