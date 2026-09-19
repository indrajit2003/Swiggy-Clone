import {addItems,incrementItem,decrementItem} from "../Stored/CartSlicer";
import { useDispatch,useSelector } from "react-redux";

export default function RestaurantManuInfo({restData}){

    const dispatch = useDispatch();

    const cartItems = useSelector(
        (state) => state.cartslice.items
    );

    const cartItem = cartItems.find(
        (item) => item.id === restData.id
    );

    const count = cartItem?.quantity || 0;


    function handleAddItems(){
        dispatch(addItems(restData));
    }

    function handleIncrementItems(){
        dispatch(incrementItem(restData));
    }

    function handleDecrementItems(){
        dispatch(decrementItem(restData));
    }


    return(
        <>
            <div className="flex justify-between w-full mb-4 pb-4">

                <div className="w-[70%]">

                    <p className="text-2xl text-gray-800 font-semibold mb-1">
                        {restData?.name}
                    </p>

                    <p className="text-xl font-semibold">
                        {"₹" + (
                            "defaultPrice" in restData
                            ? restData?.defaultPrice / 100
                            : restData?.price / 100
                        ).toFixed()}
                    </p>

                    <div className="flex items-center gap-1">

                        <span className="bg-green-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-sm">
                            ★
                        </span>

                        <span className="font-semibold text-green-800">
                            {restData?.ratings?.aggregatedRating?.rating}
                        </span>

                        <span>
                            {"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
                        </span>

                    </div>

                    <p className="font-semibold">
                        {restData?.description}
                    </p>

                </div>


                <div className="w-[20%] relative h-42">

                    <img
                        className="w-full h-36 object-cover rounded-3xl"
                        src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/" +
                            restData?.imageId
                        }
                    />

                    {
                        count === 0 ?

                        (
                            <button
                                className="absolute bottom-1 left-20 w-[40%] bg-white rounded-xl text-xl font-bold text-green-600 px-4 py-2 shadow-md border border-white"
                                onClick={handleAddItems}
                            >
                                ADD
                            </button>
                        )

                        :

                        (
                            <div className="absolute bottom-1 left-20 w-[40%] flex gap-6 bg-white rounded-xl text-2xl font-bold text-green-600 px-4 py-2 shadow-md border border-white">

                                <button onClick={handleDecrementItems}>
                                    -
                                </button>

                                <span>{count}</span>

                                <button onClick={handleIncrementItems}>
                                    +
                                </button>

                            </div>
                        )
                    }

                </div>

            </div>

            <hr className="mb-4 mt-2" />
        </>
    );
}