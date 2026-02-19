import { Cart } from "./Cart"
import { OrderSummary } from "./OrderSummary"
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

export const OrderPage = () => {
    const { items, totalAmount, dispatch } = useContext(CartContext);
    return (
        <div className="order">
            {items.length > 0 ?
            <div className="order-container">
              <Cart items={items}  dispatch= {dispatch}/>
              <OrderSummary items={items} totalAmount ={totalAmount} dispatch= {dispatch} />
            </div>
            :
            <div className="order-fallback">
              <p className="fallback-message">Order is Empty, Please add some Items.</p>
              <Link to ="/explore/popular" className="add-item-link">+ Add more items from Chuks Kitchen</Link>
            </div>
            }
        </div>
    )
}