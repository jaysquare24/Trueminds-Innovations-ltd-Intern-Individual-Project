import { FoodGrid } from "../../../common/FoodGrid"


export const SearchedFoods = ({ searchedMeals }) => {
    return (
        <section className="searched-foods">
            <h2 className="section-title">Searched Foods</h2>
            {searchedMeals.length === 0 ? (
                <p className="search-fallback">No meals found matching your search.</p>
            ) : (
                <FoodGrid foodItems={searchedMeals}/>
            )}
        </section>
    )
}   