import React from "react";
import { useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div>
      <div className="flex justify-center mt-1 p-4 gap-8">
        <div>
          <img src={item.image} alt="" className="max-w-[10vw]" />
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left mb-3 w-[23vw]">
            {item.title}
          </h1>
          <h1 className="text-gray-600 font-normal text-[10px] text-left mb-3 w-[25vw]">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>
          <div className="flex justify-between">
            <p className="text-green-600 font-bold">${item.price}</p>

            <div className="relative bg-red-300 w-9 h-9 rounded-full cursor-pointer">
              <div
                onClick={removeFromCart}
                className="absolute left-[10px] top-[10px]"
              >
                <MdDeleteForever />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-600 relative -right-[18vw] w-2/3 h-[2px]"></div>
    </div>
  );
};

export default CartItem;
