import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(data);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            // data 가져오기
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
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

    // 상품 카테고리별 가져오기
    const ShowProducts = () => {
        return(
            <>
            <div className="buttons d-flex justify-content-left mb-5 pb-5">
                <button className="btn btn-outline-dark me-2" 
                onClick={()=> setFilter(data)}>인기상품</button>
                <button className="btn btn-outline-dark me-2"
                onClick={()=> filterProduct("men's clothing")}>텐트</button>
                <button className="btn btn-outline-dark me-2"
                 onClick={()=> filterProduct("women's clothing")}>식기</button>
                <button className="btn btn-outline-dark me-2"
                 onClick={()=> filterProduct("jewelery")}>가구</button>
                <button className="btn btn-outline-dark me-2"
                 onClick={()=> filterProduct("electronics")}>침낭</button>
            </div>

            {/* 상품 가져오기 */}
            {filter.map((product)=>{
            return(
                <>
                    <div className="col-md-3">
                        <div class="card h-100 text-center p-4" key={product.id}>
                            <img src={product.image} class="card-img-top" alt={product.title}/>
                            <div class="card-body">
                                <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                <p class="card-text lead fw-bold">{product.price}</p>
                                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
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
                        <h1 className="display-6 fw-bolder text-left">인기상품</h1>
                        <hr/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading/> : <ShowProducts/>}
                </div>
            </div>
        </div>
    )
}

export default Products