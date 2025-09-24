const ProductCard = ({ product }) => {
  const { title, price, description, category, image, rating } = product;

  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top object-fit-contain" alt={title} height={200} />
        <div className="card-body">
          <h4 className="card-title">{title} <span className="h6">{rating.rate} ⭐</span></h4>
          <h5 className="card-subtitle mb-2 text-body-secondary">{category}</h5>
          <p className="card-text">{description.slice(0, 128)}...</p>
          <h5>${price}</h5>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;