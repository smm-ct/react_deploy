/* eslint-disable react/prop-types */
function Card({cardInfo}) {
  const {title, description, price, thumbnail, id} = cardInfo;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={thumbnail} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}!</h2>
        <h2 className="card-title">#{id}</h2>
        <p>Price: ${price}</p>
        <p>{description}</p>
        <div className="card-actions">
          <a href="#" className="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
  )
}

export default Card;