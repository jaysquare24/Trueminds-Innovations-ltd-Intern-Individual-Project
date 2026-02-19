
import { popularCategories } from "../../../../data/popularCategories"
import { Link } from "react-router-dom"

export const PopularCategories = () => {
    return (
        <section className="popular-categories">
            <h2 className="section-title">Popular Categories</h2>
            <div className="food-grid">
                {popularCategories?.map((item) => (
                    <Link key={item.id} className="food-item" to={`/explore/${item.category}`}>
                        <img src={item.imgUrl} alt={item.name} className="food-image" />
                        <h3 className="food-name">{item.name}</h3>   
                    </Link>
                ))}
            </div>
        </section>
    )
}   