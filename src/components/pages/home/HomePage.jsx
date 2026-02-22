import { Hero } from "../../common/Hero";
import backgroundImage from "../../../assets/home-hero-image.png";
import { PopularCategories } from "./sections/PopularCategories"; 
import { ChefSpecial } from "./sections/ChefSpecial";
import bottomBackgroungImage from  "../../../assets/home-buttom-image.png" ;
import searchIcon from "../../../assets/search-sm.svg";
import { SearchedFoods } from "./sections/SearchedFoods";
 
import { meals } from "../../../data/meals";
import { useState, useEffect } from "react";   

export const HomePage = () => {

    const [searchTerm, setSearchTerm] = useState("") ;
    const [seachedMeals, setSearchedMeals] = useState([]);  

    useEffect(()=>{
        if(searchTerm.trim() === "") return;
        const filteredMeals = meals.filter(meal =>
            meal.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
        );
        setSearchedMeals(filteredMeals);
    }, [searchTerm]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };



    return (
        <div className="home-page">
            <div className="home-top">
                <Hero 
                    title="The Heart of Nigerian Home Cooking" 
                    description="Handcrafted with passion, delivered with care." 
                    imageSrc={backgroundImage} 
                    buttonText="Discover what’s new"
                />
            </div> 
            <div className="search-bar-container">
                <img src={searchIcon} alt="search icon" className="search-icon"/>
                <input 
                    type="text" 
                    placeholder="What are you craving for today?" 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                    className="search-bar"
                />
            </div>
            {searchTerm.trim() === ""
             ? (<>
                   <PopularCategories />
                  <ChefSpecial />
                </>) 
             :
             
               (<SearchedFoods searchedMeals={seachedMeals} /> )
            }

            
            <div className="home-bottom">
                <Hero 
                    title="Introducing Our New Menu Additions!" 
                    description="Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!" 
                    imageSrc={bottomBackgroungImage} 
                    buttonText="Discover what’s new"
                />
            </div>
        </div>
    )
}