/* eslint-disable react/prop-types */
function Card({cardInfo}) {
  const {brand, title, description, price, thumbnail, stock} = cardInfo;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={thumbnail} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}!</h2>
        <p>Price: <b>${price}</b></p>
        <p>In Stock: {stock}</p>
        <p>Brand: {brand}</p>
        <p>{description}</p>
        <div className="card-actions">
          <a href="#" className="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
  )
}

export default Card;