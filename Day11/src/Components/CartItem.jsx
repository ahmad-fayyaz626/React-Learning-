import Wrapper from "./Wrapper";

// Now we have to build CartItem component which will show the single Cart Item in details.

const CartItem = () => {
  return (
    <Wrapper>
      <div className="flex gap-32 justify-around items-center">
        <div className="w-1/3">
          <img
            className="w-full h-full object-cover"
            src="https://m.media-amazon.com/images/I/71tIAIN7XVL._AC_SX679_.jpg"
            alt=""
          />
        </div>

        <div className="w-2/3 flex flex-col gap-4">
          <h1 className="font-bold text-xl line-clamp-2">Title</h1>
          <p className="line-clamp-4 font-medium">Description</p>

          <p className="font-bold text-lg">$99.99</p>

          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              +
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              -
            </button>
          </div>

          <div className="flex gap-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Add to Cart
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
            Remove from Cart
          </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CartItem;
