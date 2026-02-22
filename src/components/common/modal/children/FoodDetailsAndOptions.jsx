import { NavLink } from "react-router-dom";
import foodDetailasideimg from "../../../../assets/food-detail-image.svg"; 
import navIcon from "../../../../assets/timer.svg"; 
import { CartContext } from "../../../../context/CartContext";
import { useContext, useState, useEffect } from "react";
import { formatCurrency } from "../../../../utilities";

export const FoodDetailsAndOptions = ({ foodItem, onCloseModal }) => {

  const proteinsList = [
    { name: "Fried Chicken", price: 800, checker:"chicken" },
    { name: "Beef" , price: 700 , checker:"meat"} ,
    { name: "Grilled Fish", price: 500 , checker:"fish" },
  ];


  const exrasList = [
    { name: "Plantain", price: 700},
    { name: "Coleslaw" , price: 500 }, 
    { name: "Extra Pepper Sauce", price: 300 },
  ];

  // Find default protein based on foodItem description
  let defaultProtein = proteinsList.find(p => foodItem.description?.toLowerCase().includes(p.checker.toLowerCase())) || null;

    if (!defaultProtein) {
      defaultProtein = proteinsList.find(p => p.name === "Beef");
    }


  // State
  const [protein, setProtein] = useState(defaultProtein ? [defaultProtein] : []);
  const [extra, setExtra] = useState([]);
  const [note, setNote] = useState("");

 

  // Handle protein checkbox
  const handleProteinChange = (e) => {
    const { value, checked } = e.target;
    const proteinObj = proteinsList.find(p => p.name === value);
    if (!proteinObj) return; // safety

    if (checked) {
      setProtein(prev =>
        prev.some(p => p?.name === value) ? prev : [...prev, proteinObj]
      );
    } else {
      setProtein(prev => prev.filter(p => p?.name !== value));
    }
  };

  

    // Names of selected proteins
    const proteinNames = protein.filter(p => p && p.name !== defaultProtein?.name).map(p => p.name);

    //Name of extra sides
    const extraNames = extra.map(e => e.name);

    // Handle extra sides
    const handleExtraChange = (e) => {
        const { value, checked } = e.target;
        const side = exrasList.find(s => s.name === value);
        if (!side) return; // safety

        if (checked) {
            setExtra(prev => prev.some(item => item.name === value) ? prev : [...prev, side]);
            } else {
            setExtra(prev => prev.filter(item => item.name !== value));
        }
    };

    // Total extra protein price (excluding default protein)
    const proteinPrice = protein
    .filter(p => p && p.name !== defaultProtein?.name)
    .reduce((total, item) => total + item.price, 0);

    //Total extra sides price
    const extraPrice = extra.reduce((total, item) => total + item.price, 0);

    // Grand total for the food item with selected options
    const totalPrice = foodItem.price + proteinPrice + extraPrice;

    const { dispatch } = useContext(CartContext);

    // Add to cart
    const handleAddToCart = () => {
        dispatch({
        type: "ADD_TO_CART",
        payload: {
            id: foodItem.id,
            name: foodItem.name,
            price: totalPrice,
            imgUrl: foodItem.imgUrl,
            quantity: 1,
            proteins: proteinNames,
            extras: extraNames,
            note: note
        }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddToCart();
        onCloseModal();
    };

    const handleNonFunctionalLinkClick = (e) => {
        e.preventDefault();
        alert("This link is not functional in the current version.");
    };


  return (
    <section className="food-details-section">
      <div className="food-details aside-image-container">
        <img src={foodItem.imgUrl} alt="food image" className="food-details-mobile-aside-image"/>
        <img src={foodDetailasideimg} alt="food image" className="food-details-aside-image"/>
      </div>

      <div className="food-details-content">
        <div className="top-item">
          <h2 className="food-name">{foodItem.name}</h2>
          <p className="food-price">₦{formatCurrency(foodItem.price)}</p>
          <p className="food-description">{foodItem.description}</p>
        </div>

        <div className="options">
          <div className="options-buttons" onClick={handleNonFunctionalLinkClick}>
            <NavLink className="option-button">
              <img src={navIcon} className="nav-icon" alt="nav icon"/>Protein options
            </NavLink>
            <NavLink className="option-button">
              <img src={navIcon} className="nav-icon" alt="nav icon"/>Vegetarian options available
            </NavLink>
            <NavLink className="option-button">
              <img src={navIcon} className="nav-icon" alt="nav icon"/>View Allergies
            </NavLink>
          </div>

          <div className="selection-container">
            <form onSubmit={handleSubmit}>

              {/* Protein selection */}
              <div className="protein-container">
                <h3>Choose Your Protein</h3>
                {proteinsList.map(proteinOption => (
                  <div className="input-container" key={proteinOption.name}>
                    <input 
                      type="checkbox"
                      id={proteinOption.name.toLowerCase().replace(" ", "-")}
                      name={proteinOption.name.toLowerCase().replace(" ", "-")}
                      className="protein"
                      value={proteinOption.name}
                      checked={protein.some(p => p?.name === proteinOption.name) }
                      onChange={handleProteinChange}
                    />
                
                    <label htmlFor={proteinOption.name.toLowerCase().replace(" ", "-")}>
                      {proteinOption.name}
                    </label>
                    {defaultProtein?.name === proteinOption.name 
                      ? <p>(Default)</p>
                      : <p>₦{formatCurrency(proteinOption.price)}</p>
                    }
                  </div>
                ))}
              </div>

              {/* Extra sides */}
              <div className="extra-container">
                <h3>Extra Sides (Optional)</h3>
                {exrasList.map(side => (
                  <div className="input-container" key={side.name}>
                    <input
                      type="checkbox"
                      id={side.name.toLowerCase().replace(/ /g, "-")}
                      name={side.name.toLowerCase().replace(/ /g, "-")}
                      value={side.name}
                      checked={extra?.some(e => e.name === side.name)}
                      onChange={handleExtraChange}
                      className="extra"
                    />
                    <label htmlFor={side.name.toLowerCase().replace(/ /g, "-")}>{side.name}</label>

                    <p>
                        ₦{formatCurrency(side.price)} 
                    </p>
                  </div>
                ))}
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

              <button type="submit" className="submit-option-button">
                Confirm to Cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};