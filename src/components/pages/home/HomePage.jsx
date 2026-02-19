import { Hero } from "../../common/Hero"
import backgroundImage from "../../../assets/home-hero-image.png"
import { PopularCategories } from "./sections/PopularCategories" 
import { ChefSpecial } from "./sections/ChefSpecial"   
import bottomBackgroungImage from  "../../../assets/home-buttom-image.png"   

export const HomePage = () => {
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
            <PopularCategories />
            <ChefSpecial />
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