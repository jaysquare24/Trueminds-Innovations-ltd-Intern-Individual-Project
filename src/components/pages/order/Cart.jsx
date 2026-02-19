import { formatCurrency } from "../../../utilities";

import { Link } from "react-router-dom";

export const Cart = ({items, dispatch}) => {
  
  return (  
    <div className="cart-container">
        <h2 className="cart-header">Your Cart</h2>
        <div className="cart-items-wrapper">
        {items && items.map((item) => (

            <div key={item.id} className="cart-item-container">
                <div className="cart-item-image-container">
                    <img src={item.imgUrl} alt=" carted food image" className="cart-item-image"/>
                </div>
                <div className="cart-item-content">
                    <div className="cart-item-description">
                        <h4 className="cart-item-name">{item.name}</h4>
                        
                        {item.proteins?.length > 0 && (
                        <p className="cart-item-extra">With: {item.proteins.join(", ")}</p>
                        )}

                        {item.extras?.length > 0 && (
                        <p className="cart-item-extra">Extras: {item.extras.join(", ")}</p>
                        )}

                        <p className="food-price">₦{formatCurrency(item.price)}</p>
                    </div>
                                        
                    <div className="cart-item-btn-container">
                        <button onClick={() => dispatch({ type: "INCREMENT", payload: item.id })} >
                            +
                        </button>
                        <p className="food-quantity">{item.quantity}</p>
                        <button onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}>
                            -
                        </button>
                    </div>
                    
                    <button  className="cart-item-remove-btn" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
                    X
                    </button>
                </div>
            </div>
        ))}
        </div> 
        <div className="cart-bottom-btns">
           <Link to ="/explore/popular">+ Add more items from Chuks Kitchen</Link>
    
            <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
                Clear Cart
            </button>
        </div>
    </div>

      
   
  );
};
