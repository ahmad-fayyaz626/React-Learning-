import {
  CiYoutube,
  CiHeart,
  CiShare2,
  CiFacebook,
  CiInstagram,
  CiTwitter,
} from "react-icons/ci";
import { FaComment } from "react-icons/fa";
import Button from "./Button";

const Card = ({ name, profession, imgSrc }) => {
  return (
    <div className=" bg-white h-120 w-80">
      <div className=" bg-blue-400 h-40 w-full relative">
        <img
          className=" bg-white p-1 h-full translate-x-[50%]  translate-y-1/4 border-3 border-blue-400 rounded-full aspect-square absolute"
          src={imgSrc}
          alt="Error in Loading"
        />
      </div>
      <h1 className="mt-15 font-bold text-2xl text-center">{name}</h1>
      <p className="text-center font-medium">{profession}</p>
      <div className="flex justify-center gap-4 mt-3">
        <div className="p-3 rounded-full bg-red-100">
          <CiYoutube className="text-2xl text-red-600" />
        </div>

        <div className="p-3 rounded-full bg-blue-100">
          <CiFacebook className="text-2xl text-blue-600" />
        </div>

        <div className="p-3 rounded-full bg-pink-100">
          <CiInstagram className="text-2xl text-pink-600" />
        </div>

        <div className="p-3 rounded-full bg-sky-100">
          <CiTwitter className="text-2xl text-sky-600" />
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <Button name="Follow" />
        <Button name="Share" />
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <div className="flex justify-center gap-4 mt-4">
          <div>
            <CiHeart className="text-2xl text-red-600" />
          </div>
          <div>
            <span>1.2K</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <div>
            <FaComment className="text-2xl text-gray-600" />
          </div>
          <div>
            <span>500</span>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <div>
            <CiShare2 className="text-2xl text-gray-600" />
          </div>
          <div>
            <span>200</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
