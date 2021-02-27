import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props.product.name);
    return (
        <div className='product'>
            <div>
                <img src ={props.product.img}></img>
            </div>
            <div className='product-name'>
            <h4>{props.product.name}</h4>
            <br/>
            <p><small>by: {props.product.seller}</small></p>
            <p>${props.product.stock}</p>
            <p><small>Only {props.product.stock} left in stock - Order soon!</small></p>
            <button className='main-button' onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to cart</button>
        </div>
        </div>
        
    );
};

export default Product;