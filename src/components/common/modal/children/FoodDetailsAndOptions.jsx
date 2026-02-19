import { NavLink } from "react-router-dom"
import foodDetailasideimg from "../../../../assets/food-detail-image.svg" 
import navIcon from "../../../../assets/timer.svg" 
import { CartContext } from "../../../../context/CartContext";
import { useContext } from "react";
import { useState } from "react";
import { formatCurrency } from "../../../../utilities";


export const FoodDetailsAndOptions = ({foodItem, onCloseModal}) => {


    const proteinsList = ["Fried Chicken", "Beef", "Grilled Fish"];

    const defaultProtein =
    proteinsList.find(protein =>
        foodItem.name?.includes(protein)
    ) || "Beef";

    const [protein, setProtein] = useState([defaultProtein]);
    const [extra, setExtra] = useState([]);
    const [note, setNote] = useState("");
     

    const handleProteinChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setProtein((prev) => [...prev, value]);
        } else {
            setProtein((prev) => prev.filter((item) => item !== value));
        }
    };
    
    
    const handleExtraChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setExtra((prev) => [...prev, value]);
        } else {
            setExtra((prev) => prev.filter((item) => item !== value));
        }
    };


    const {dispatch} = useContext(CartContext);

    const handleAddToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload:{
                id: foodItem.id,
                name: foodItem.name,
                price: foodItem.price,
                imgUrl: foodItem.imgUrl,
                quantity: 1,
                proteins: protein,
                extras: extra,
                note:note
            }
        }) 
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddToCart();
        onCloseModal()
    };

    return(
        <section className="food-details-section">
            <div className="food-details aside-image-container">
                <img src={foodDetailasideimg} alt="food-details modal image" className="food-details-aside-image"/>
            </div>

            <div className="food-details-content">
                <div className="top-item">
                    <h2 className="food-name">{foodItem.name}</h2>
                    <p className="food-price">₦{formatCurrency(foodItem.price)}</p>
                    <p className="food-description">{foodItem.description}</p>
                </div>
                <div className="options">
                    <div className="options-buttons">
                        <NavLink className="option-button" ><img src={navIcon} className="nav-icon" alt="nav icon"/>Protein options</NavLink>
                        <NavLink className="option-button"><img src={navIcon} className="nav-icon" alt="nav icon"/>Vegetarian options available</NavLink>
                        <NavLink className="option-button"><img src={navIcon} className="nav-icon" alt="nav icon"/>View Allergies</NavLink>
                    </div>

                    <div className="selection-container">
                        
                            
                        <form onSubmit={handleSubmit}>
                            <div className="protein-container">
                                <h3>Choose Your Protein</h3>
                                <div className="input-container">
                                    <input 
                                    type="checkbox" 
                                    id="chicken" 
                                    name="chicken" 
                                    className="protein" 
                                    value="Fried Chicken"
                                    checked={protein.includes("Fried Chicken")}
                                    onChange={handleProteinChange}
                                    />
                                    <label htmlFor="chicken" >Fried Chicken</label>
                                    <p>(Default)</p>
                                </div>

                                <div className="input-container">
                                    <input 
                                    type="checkbox" 
                                    id="fish" 
                                    name="fish"
                                    value="Grilled Fish"
                                    checked={protein.includes("Grilled Fish")}
                                    onChange={handleProteinChange} 
                                    className="protein"
                                    />
                                    <label htmlFor="fish" >Grilled Fish</label>
                                    <p>+500</p>
                                </div>

                                <div className="input-container">
                                    <input 
                                    type="checkbox" 
                                    id="beef" 
                                    name="beef" 
                                    className="protein"
                                    value="Beef"
                                    checked={protein.includes("Beef")}
                                    onChange={handleProteinChange} 
                                    />
                                    <label htmlFor="beef" >Beef</label>
                                    <p>+700</p>
                                </div>
                            </div>

                            <div className="extra-container">
                                <h3>Extra Sides (Optional)</h3>
                                <div className="input-container">
                                    <input 
                                    type="checkbox" 
                                    id="plantain" 
                                    name="plantain" 
                                    value="Plantain"
                                    checked={extra.includes("Plantain")}
                                    onChange={handleExtraChange}
                                    className="extra" 
                                    />
                                    <label htmlFor="plantain" >Fried Plantain</label>
                                    <p>+700</p>
                                </div>

                                <div className="input-container">
                                    <input 
                                    type="checkbox" 
                                    id="coleslaw" 
                                    name="coleslaw" 
                                    value="Coleslaw"
                                    checked={extra.includes("Coleslaw")}
                                    onChange={handleExtraChange}
                                    className="extra" 
                                    />
                                    <label htmlFor="coleslaw" >Coleslaw</label>
                                    <p>+500</p>
                                </div>

                                <div className="input-container">
                                    <input 
                                    type="checkbox" 
                                    id="sauce" 
                                    name="sauce" 
                                    value="Extra Pepper Sauce"
                                    checked={extra.includes("Extra Pepper Sauce")}
                                    onChange={handleExtraChange}
                                    className="extra" 
                                    />
                                    <label htmlFor="sauce" >Extra Pepper Sauce</label>
                                    <p>+300</p>
                                </div>  
                            </div>  

                            <div className="instruction-container">
                                <h3>Special Instruction</h3>
                                <textarea 
                                rows="4" 
                                className="instruction-textfield"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                ></textarea>
                            </div> 
                            <button type="submit" className="submit-option-button">Confirm to Cart</button>     
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}