import React, { useState } from "react";


const Databinding = () => {

    //useState is only used by using getter value

    const [products] = useState({ Name: "Samsung TV", Price: 45000.44 });
    const [categoriess] = useState(["All", "Electronics", "Fashion"]);

    let UserName = "John";
    let product = {
        "Name": "Samsung TV",
        "Price": 450000
    }

    let categories = ["All", "Electronics", "Fashion", "Footwear"];

    let menu = [
        { Category: "Electronics", Products: ["TV", "Mobile"] },
        { Category: "Footwear", Products: ["Boots", "Casuals"] }
    ];

    const [userName, setUserName] = useState('John');

    function NameChange(e) {
        setUserName(e.target.value);
    }

    const [productss, setProduct] = useState({ Name: '', Price: 0, Stock: false });

    function handleNameChange(e) {
        setProduct({
            Name: e.target.value,
            Price: productss.Price,
            Stock: productss.Stock
        })
    }
    function handlePriceChange(e) {
        setProduct({
            Name: productss.Name,
            Price: e.target.value,
            Stock: productss.Stock
        })
    }
    function handleStockChange(e) {
        setProduct({
            Name: productss.Name,
            Price: productss.Price,
            Stock: e.target.checked
        })
    }

    return (
        <>
            <div className="container-fluid">
                <h2>Data Binding</h2>
                <p>Hello!{UserName}</p>
                <h2>Product Details</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{product.Name}</dd>
                    <dt>Price</dt>
                    <dd>{product.Price}</dd>
                </dl>
            </div>

            <div className="container-fluid">
                <ol>
                    {
                        categories.map(category =>
                            <li key={category}>{category}</li>
                        )
                    }
                </ol>
                <select>
                    {
                        categories.map(category =>
                            <option key={category}>{category}</option>
                        )
                    }
                </select>
                <h2>Checkboxes</h2>
                <div>
                    {
                        categories.map(category =>
                            <div key={category}>
                                <input type="checkbox" /> <label>{category}</label>
                            </div>
                        )
                    }
                </div>
                <h2>Nav</h2>
                <div>
                    {
                        categories.map(category =>
                            <button className="btn btn-primary me-2" key={category}>{category}</button>
                        )
                    }
                </div>

                <div className="container-fluid">
                    <ol>
                        {
                            menu.map(item =>
                                <li key={item.Category}>
                                    {item.Category}
                                    <ul>
                                        {
                                            item.Products.map(product =>
                                                <li key={product}>{product}</li>
                                            )
                                        }
                                    </ul>
                                </li>
                            )
                        }
                    </ol>
                    <div>
                        <select>
                            {
                                menu.map(item =>
                                    <optgroup label={item.Category} key={item.Category}>
                                        {
                                            item.Products.map(product =>
                                                <option key={product}>{product}</option>
                                            )
                                        }
                                    </optgroup>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="container-fluid">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{products.Name}</dd>
                        <dt>Price</dt>
                        <dd>{products.Price}</dd>
                    </dl>
                    <h3>Select Category</h3>
                    <select>
                        {
                            categoriess.map(category =>
                                <option key={category}>{category}</option>
                            )
                        }
                    </select>
                </div>
                <div className="container-fluid">
                    <h2>Two Way Binding</h2>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" onChange={NameChange} value={userName} /></dd>
                    </dl>
                    <p>Hello ! {userName}</p>
                </div>

                <div className="container-fluid">
                    <h2>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={handleNameChange} value={productss.Name} /></dd>
                        <dt>Price</dt>
                        <dd><input type="text" onChange={handlePriceChange} value={productss.Price} /></dd>
                        <dt>Stock</dt>
                        <dd>
                            <input type="checkbox" onChange={handleStockChange} checked={productss.Stock} /> {(productss.Stock == true) ? "Available" : "Out of Stock"}
                        </dd>
                    </dl>
                    <h3>Product Details</h3>
                    <dl>
                        <dt>Name</dt>
                        <dd>{productss.Name}</dd>
                        <dt>Price</dt>
                        <dd>{productss.Price}</dd>
                        <dt>Stock</dt>
                        <dd>{(productss.Stock == true) ? "Available" : "Out of Stock"}</dd>
                    </dl>
                </div>

            </div>
        </>
    )
}

export { Databinding };