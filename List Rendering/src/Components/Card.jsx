// Listen this is gonna be the project where we will learn list rendering in react
const Card = ({
  title,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
  
  details,
  image,
}) => {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-lg shadow-md">
      <div className="bg-transparent w-48 h-48">
        <img className="w-full h-full object-contain" src={image} alt={title} />
      </div>

      <div className="flex flex-col gap-2">
        <h1>{title}</h1>

        <div className="flex gap-2 items-center">
          <span>{rating}</span>
          <span>{reviews} reviews</span>
        </div>

        <ul className="list-disc list-inside">
          {details.map((detail, index) => (
            <li className="ml-4" key={index}>
              {detail}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2 items-center">
          <span> {offers.exchangeOffer}</span>
          <span> {offers.bankOffer}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
