import React from 'react';
import Header from '../Components/Header';
import { Product_list_Data } from './Data/product-list-data';
import "./styles/product-list.css";

const Product_list = () => {
    return (
        <div className="pl-body">
            <Header className="pl-header" />
            <div className='pl-sort-sec'>
                <span>Search Result for dash</span>
                <span>Sort By</span>
                <select>
                    <option value="1">first opt</option>
                    <option value="2">second opt</option>
                    <option value="3">third opt</option>
                    <option value="4">fourth opt</option>
                </select>
            </div>
            <div className='pl-categories-sec'>
                <h3>Product Type</h3>
                <form action="">
                    <input type="checkbox" /> <span>Tee Shirts</span> <br />
                    <input type="checkbox" /> <span>Mugs</span> <br />
                    <input type="checkbox" /> <span>Phone Back Covers</span> <br />
                    <input type="checkbox" /> <span>Book Covers</span> <br />
                    <input type="checkbox" /> <span>Lockets</span> <br />
                    <input type="checkbox" /> <span>Rotating Lamps</span> <br />
                </form>
            </div>
            <div className='pl-search-result-sec'>

                {
                    Product_list_Data.map((product) => {
                        return (
                            <div className='pl-search-result-card'>
                                <img src={product.src} alt={product.alt} />
                                <label>{product.title}</label>
                                <label>₹{product.rupees}.{product.paisa}</label>
                            </div>
                        )
                    }
                    )
                }


            </div>
        </div>
    )
}

export default Product_list