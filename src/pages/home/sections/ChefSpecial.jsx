import { FoodGrid } from "../../../components/common/FoodGrid"
import { chefSpecials } from "../../../data/chefSpecial"

export const ChefSpecial = () => {
    return (
        <section className="chef-special">
            <h2 className="section-title">Chef's Special</h2>
            <FoodGrid foodItems={chefSpecials}/>
        </section>
    )
}   