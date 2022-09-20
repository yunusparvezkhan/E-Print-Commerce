import React from 'react';
import Header from '../Components/Header';
import { Product_list_Data } from './Data/product-list-data';
import "./styles/product-list.css";



const FormData = () => {
    const category1 = document.getElementById("category1").checked;
    const category2 = document.getElementById("category2").checked;
    const category3 = document.getElementById("category3").checked;
    const category4 = document.getElementById("category4").checked;
    const category5 = document.getElementById("category5").checked;
    const category6 = document.getElementById("category6").checked;

    const checkedCategories = [];

    if (category1 === true) {
        checkedCategories.push("cat1")
    }

    if (category2 === true) {
        checkedCategories.push("cat2")
    }

    if (category3 === true) {
        checkedCategories.push("cat3")
    }

    if (category4 === true) {
        checkedCategories.push("cat4")
    }

    if (category5 === true) {
        checkedCategories.push("cat5")
    }

    if (category6 === true) {
        checkedCategories.push("cat6")
    }

    console.log("program is running")
    console.log(checkedCategories)
}

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
                <input type="checkbox" id="category1" /> <span>Tee Shirts</span> <br />
                <input type="checkbox" id="category2" /> <span>Mugs</span> <br />
                <input type="checkbox" id="category3" /> <span>Phone Back Covers</span> <br />
                <input type="checkbox" id="category4" /> <span>Book Covers</span> <br />
                <input type="checkbox" id="category5" /> <span>Lockets</span> <br />
                <input type="checkbox" id="category6" /> <span>Rotating Lamps</span> <br />
                <button onClick={FormData} >submit</button>
            </div>
            <div className='pl-search-result-sec'>

                {
                    Product_list_Data.map((product) => {
                        // if (product.category == ) {

                        // }
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
            <div>

            </div>
        </div>
    )
}

export default Product_list