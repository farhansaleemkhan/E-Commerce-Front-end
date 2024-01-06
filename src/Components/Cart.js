import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import "./Style.css";

const Cart = () => {
    const { cart, removeFromCart, decreaseQuantity, addToCart, clearCart, getTotalPrice } =
        useContext(CartContext);
    return (
        <div className="cart card">
            <h1 className="text-center bg-success p-2 text-white bg-opacity-75">Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="container text-center">
                    <ul className="row">
                        {cart.map((item) => (
                            <li key={item.id} className="col-lg-4 col-md-6 col-sm-12">
                                <img src={item.Itempic} alt={item.Itemname} />
                                <div>
                                    <h2>{item.Itemname}</h2>
                                    <p>Price: ${item.Price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <button onClick={()=>decreaseQuantity(item)} className="btn btn-outline-dark btn-lg"><i class="fa fa-minus"></i></button>
                                    <button onClick={() => removeFromCart(item)} className="btn btn-warning btn-lg">Remove From Cart <i class="bi bi-trash"></i></button>
                                    <button onClick={()=>addToCart(item)} className="btn btn-outline-success btn-lg"><i class="fa fa-plus"></i></button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="card-footer">
                    <p>Total Price: ${getTotalPrice()}</p>
                    <button onClick={() => clearCart()}className="btn btn-danger btn-lg">Clear Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Cart;
