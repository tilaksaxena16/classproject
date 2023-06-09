import React from "react";

const Databinding = () => {

    let UserName = "John";
    let product = {
        "Name": "Samsung TV",
        "Price": 450000
    }

    let categories = ["All", "Electronics", "Fashion", "Footwear"];

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
            </div>
        </>
    )
}

export { Databinding };