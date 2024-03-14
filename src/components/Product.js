import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  //useDispatch() hook returns a reference to the dispatch function from the Redux store

  const addToCart = () => {
    dispatch(add(post)); //here post works as a input parameter
    toast.success("Item is added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item is removed from cart");
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_35px_60px_-15px_rgb(0,0,0,0.3)]">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      <div className="h-[100px]">
        <img src={post.image} alt="" className="h-full w-full" />
      </div>

      <div className="flex justify-between gap-11">
        <div className="text-green-600 font-semibold">
          <p>${post.price}</p>
        </div>

        {cart.some((p) => p.id === post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            onClick={addToCart}
          >
            Add Item
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
