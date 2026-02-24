import { Hero } from "../common/Hero"
import { menuCategories } from "../../data/menuCategories";
import { FoodGrid } from "../common/FoodGrid"
import exploreHeroImage from "../../assets/explore-hero-img.png";
import { NavLink, useParams } from "react-router-dom";
import { meals } from "../../data/meals";
  
export const ExplorePage = () => {

    const { category } = useParams();

    const normalizedValue = category?.toLowerCase().trim();

    const foodCategory =
     normalizedValue === "all"
        ? meals
        : normalizedValue === "popular" ? meals.filter(meal => meal.isPopular)
        : meals.filter(meal => meal.category.toLowerCase() === normalizedValue);

    const foodCategoryTitle = 
     normalizedValue === "all" ? menuCategories.all 
     :normalizedValue === "popular" ? menuCategories.popular 
     : menuCategories[normalizedValue];

    const activeCategory = 
      normalizedValue === "all" ? "all" 
     :normalizedValue === "popular"? "popular" 
     : Object.keys(menuCategories).find(key => key.toLowerCase() === normalizedValue);
     

    return(
        <div className="explore-page">
            <Hero
               title="Chuks  Kitchen" 
               description="Chuks  Kitchen Nigerian Home Cooking 4.8  (1.2k)" 
               imageSrc={exploreHeroImage} 
            />
            <section className="menu-categories-section section">
                <h2 className="menu-categories-title">Menu Categoris</h2>
                <nav className="menu-categories-container">
                    { Object.entries(menuCategories).map(([key, value]) => ( 
                      <NavLink
                        key={key}
                        to= {`/explore/${key}`}

                        className={`menu-category-nav ${activeCategory===key? "active-category" : ""}`}
                      >
                        {value}
                      </NavLink>
                    ))}
                </nav> 
            </section>

            <section className="food-section section">
                <h2 className="food-category-title">{foodCategoryTitle}</h2>
                <FoodGrid foodItems={foodCategory}/>
                {normalizedValue !== "all" && (   
                    <NavLink to="/explore/all" className="view-all-link">View All Categories</NavLink> 
                )}
            </section>
             

            


        

            

           
        </div>
    )
} 