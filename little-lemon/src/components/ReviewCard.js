export default function ReviewCard(props) {
    const { name, rating, comment, imageUrl } = props;
    return (
        <div className="customer-card">
            <h4 className="card-title">{name}</h4>
            <p>{rating}</p>
            <p>{comment}</p>
        </div>
    )
}