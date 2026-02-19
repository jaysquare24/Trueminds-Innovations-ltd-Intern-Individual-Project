
import { Modal } from "./modal/Modal";
import { FoodDetailsAndOptions } from "./modal/children/FoodDetailsAndOptions";
import { useState } from "react";
import { meals } from "../../data/meals";
import { formatCurrency } from "../../utilities";

export const FoodGrid = ({ foodItems }) => {
    
    
  const [selectedMeal, setSelectedMeal] = useState(null);

    const handleAddOptions = (id) => {
    const meal = meals.find(meal => meal.id === id);
    if (meal) {
      setSelectedMeal(meal);
    }
  };


  return (
    <>
      <div className="food-grid">
        {foodItems.map((item) => (
          <div key={item.id} className="food-item">
            <img src={item.imgUrl} alt={item.name} className="food-image" />
            <h3 className="food-name">{item.name}</h3>

            {item.description && (
              <p className="food-description">{item.description}</p>
            )}

            {item.price && (
              <div className="food-footer">
                <p className="food-price">₦{formatCurrency(item.price)}</p>
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddOptions(item.id)}
                >
                  View Options
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedMeal && (
        <Modal open={selectedMeal} onClose={()=> setSelectedMeal(null)} >
          <FoodDetailsAndOptions foodItem={selectedMeal} onCloseModal={()=> setSelectedMeal(null)}  />
        </Modal>
      )}
    </>
  );
}

                    