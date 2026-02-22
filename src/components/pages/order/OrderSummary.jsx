import { Link } from "react-router-dom"
import { getSubTotal, formatCurrency,getShippingFee, getGrandTotal } from "../../../utilities"


export const OrderSummary = ({items}) => {
    const handleNonFunctionalLinkClick = (e) => {
        e.preventDefault();
        alert("This link is not functional in the current version.");
    };


    
    return (
        <div className="order-summary">
           <h2 className="order-summary-header">Order Summary</h2>
           
           <div className="promo-container">
                <div className="promo-input-container">
                 <label htmlFor="promo">Add a Promo Code</label>
                 <input name="promo"  id="promo" pattern="[A-Za-z0-9]+" placeholder="Enter code here"/>
                </div>
                <button className="promo-button" type="submit" onClick={handleNonFunctionalLinkClick}>Apply</button>
           </div>

           <div className="summary-container">
                <p className="attribute-container">
                    <span className="label">Subtotal</span>
                    <span className="subtotal value">
                      ₦{getSubTotal(items)}
                    </span>
                </p>
                
                <p className="attribute-container">
                    <span className="label">Delivery</span> 
                    <span className="delivery value">
                      ₦{formatCurrency(getShippingFee(items))}
                    </span>
                </p>
                <p className="attribute-container">
                    <span className="label">Service Fee</span>
                    <span className="service value">
                       ₦{formatCurrency(0)}
                    </span>
                </p>
                <p className="attribute-container">
                    <span className="label">Tax</span>
                    <span className="tax value">
                     ₦{formatCurrency(0)}
                    </span>
                </p>
                <p className="attribute-container">
                    <span className="label">Total</span>
                    <span className="totl value">
                     ₦{getGrandTotal(items)} 
                    </span>
                </p>

               
           </div>

           <div className="delivery-btn-container">
                <Link  onClick={handleNonFunctionalLinkClick}>Delivery</Link>
                <Link onClick={handleNonFunctionalLinkClick}>Pick-Up</Link>
           </div>

           <div className="instruction">
               <h3 className="instruction-header">Special Instructions for Restaurant</h3>
               <textarea rows="4"></textarea>
           </div>
           
           <button
            className='checkout-button'
            onClick={handleNonFunctionalLinkClick}
            >
              Proceed to Checkout
              
            </button>
        </div>
    )
}