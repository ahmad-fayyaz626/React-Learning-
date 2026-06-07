const Card = ({
  title,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
  details,
  image,
  offers,
}) => {
  return (
    <div className="flex gap-10 bg-white p-5 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 w-screen">
      {/* Image Section */}
      <div className="shrink-0 w-44 h-44 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center">
        <img
          className="w-full h-full border-2 border-gray-300 object-contain p-2"
          src={image}
          alt={title}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        {/* Title */}
        <h1 className="text-gray-900 font-semibold text-base leading-snug line-clamp-2">
          {title}
        </h1>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-md">
            ★ {rating}
          </span>
          <span className="text-gray-400 text-sm">{reviews} reviews</span>
        </div>

        {/* Details List */}
        <ul className="space-y-1">
          {details.map((detail, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-gray-600 text-sm"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
              {detail}
            </li>
          ))}
        </ul>

        {/* Offers */}
        <div className="flex flex-col gap-1 mt-auto">
          <span className="text-xs text-green-700 bg-green-50 border border-green-200 rounded-md px-2 py-1 w-fit">
            🔄 {offers.exchangeOffer}
          </span>
          <span className="text-xs text-blue-700 bg-blue-50 border border-blue-200 rounded-md px-2 py-1 w-fit">
            🏦 {offers.bankOffer}
          </span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xl font-bold text-gray-900">₹{price}</span>
          <span className="text-sm text-gray-400 line-through">
            ₹{originalPrice}
          </span>
          <span className="text-sm font-semibold text-green-600">
            {discount}% off
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
