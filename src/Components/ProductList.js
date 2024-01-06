import React, { useContext} from "react";
import { CartContext } from "./CartProvider";
import "./ProductList.css";

const ProductList = ({id, Itemname, Price, Itempic}) => {
  const { products, addToCart } = useContext(CartContext);
  return (<div>
      {/* <h1 className="head bg-dark p-2 text-center mt mb">E-Commerce Website</h1> */}
    <div className="container">
      <div className="show text-center row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <img src={product.Itempic} alt={product.Itemname} />
            <h3>Item Name: {product.Itemname}</h3>
            <p>Item Price: $ {product.Price}</p>
            <button onClick={()=>addToCart(product)}className="btn btn-primary btn-lg">Add to Cart</button>
          </div>
        ))}
        <br />
      </div>
    </div>
    </div>
  );
};

export default ProductList;
