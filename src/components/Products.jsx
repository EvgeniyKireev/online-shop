import React, {useEffect, useState} from 'react';
import axios from "axios";
import OneCard from "./OneCard";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:8090/api/product').then(response=> setProducts(response.data))
    }, [])
    return (
        <div className={"d-flex justify-content-start flex-wrap mt-5 container"}>
            {products.map(el => <OneCard description={el.description} size={el.size} price={el.price} count={el.pieces_in_stock}/>)}
        </div>
    );
};

export default Products;