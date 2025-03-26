import { reviews } from "../index"
import ReviewCard from "./ReviewCard"
export default function CustomersSay() {
    return (
        <div className="reviews">
            <h2 className="section-title">Our Customers Say</h2>
            <div className="row review-container">
            {
                reviews.map((item, index) => {
                    return (
                        <ReviewCard key={index} name={item.name} rating={item.rating} comment={item.comment} imageUrl={item.imgUrl}/>
                        )
                })
            }
            </div>
        </div>
    )
}