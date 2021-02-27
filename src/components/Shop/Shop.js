import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './shop.css'
import Product from '../../components/Product/Product'
import Cart from '../../components/Cart/Cart'
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])
    const handleAddProduct = (props) => {
        const newCart = [...cart, props];
        setCart(newCart);
    }
    return (
        <div>
           <div className="shop-container">
               <div className="product-container">
                   
                    {products.map(pd => <Product handleAddProduct = {handleAddProduct} product={pd}></Product>)}
                   
               </div>
               <div className="cart-container">
                   <Cart cart ={cart}></Cart>
               </div>
           </div>
            
        </div>
    );
};

export default Shop;