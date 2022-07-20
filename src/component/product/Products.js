import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(data);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
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
    // 조회수별 정렬
    const sortData = () => {
        data.sort(function(a,b) {
            return parseFloat(b.reviews) - parseFloat(a.reviews);
        })
    }
    sortData();
    
    
    let arr = [];
    const tent = data.filter((x) => x.category === "tent").slice(0,6);
    const tarp = data.filter((x) => x.category === "tarp").slice(0,6);
    const light = data.filter((x) => x.category === "light").slice(0,6);
    const sleepingBag = data.filter((x) => x.category === "sleeping_bag").slice(0,6);
    const chair = data.filter((x) => x.category === "chair").slice(0,6);

    const list = arr.concat(tent);
    const list1 = list.concat(tarp);
    const list2 = list1.concat(light);
    const list3 = list2.concat(sleepingBag);
    const list4 = list3.concat(chair);
    
    // 카테고리 분류 및 카테고리별 6개 상품 보여주기
    const filterList = (cat) => {
        const updatedList = list4.filter((x)=>x.category === cat);
        if(updatedList.length > 6){
            updatedList.splice(6, updatedList.length)
        }
        setFilter(updatedList);
    }

    // 상품 카테고리별 가져오기
    const ShowProducts = () => {
        return(
            <>
            <div className="buttons d-flex justify-content-left mb-5">
                <button className="btn btn-outline-dark me-2"
                onClick={()=> setFilter(list4)}>인기상품</button>
                <button className="btn btn-outline-dark me-2"
                onClick={()=> filterList("tent")}>텐트</button>
                <button className="btn btn-outline-dark me-2"
                 onClick={()=> filterList("tarp")}>타프</button>
                <button className="btn btn-outline-dark me-2"
                 onClick={()=> filterList("light")}>조명</button>
                <button className="btn btn-outline-dark me-2"
                 onClick={()=> filterList("sleeping_bag")}>침낭</button>
                <button className="btn btn-outline-dark me-2"
                 onClick={()=> filterList("chair")}>의자</button>
            </div>
            {/* 상품 가져오기 */}
            {filter.map((product)=>{
            return(
                <>
                    <div className="col-md-3">
                        <div class="card h-100 text-center p-4" key={product.id}>
                            <img src={product.imageUrl} class="card-img-top" width="450" height="200" alt={product.name}/>
                            <div class="card-body">
                                <h5 class="card-title mb-0">{product.name.substring(0,10)}...</h5>
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
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-left">인기상품</h1>
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

export default Products