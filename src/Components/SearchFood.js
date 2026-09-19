import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantManuInfo from "./RestaurantMenuInfo";

export default function SearchFood() {

    const { id } = useParams();

    const [RestData, setRestData] = useState([]);
    const [food, setFood] = useState("");

    useEffect(() => {

        async function fetchData() {

            const swiggyAPI = `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&restaurantId=${id}`;

            const response = await fetch(swiggyAPI);
            const data = await response.json();

            const tempData =
                data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

            let allFood = [];

            tempData?.forEach((items) => {

                if (items?.card?.card?.itemCards) {

                    items.card.card.itemCards.forEach((item) => {
                        allFood.push(item.card.info);
                    });

                }

            });

            // Duplicate remove
            const uniqueFood = [
                ...new Map(
                    allFood.map((item) => [item.id, item])
                ).values()
            ];

            setRestData(uniqueFood);
        }

        fetchData();

    }, [id]);


    // Search
    const searchData = RestData.filter((item) =>
        item?.name?.toLowerCase().includes(food.toLowerCase())
    );


    return (
        <div className="w-[80%] mx-auto mt-20">

            <input
                className="w-full pl-10 py-4 text-2xl rounded-xl bg-gray-200 border"
                placeholder="Search here"
                value={food}
                onChange={(e) => setFood(e.target.value)}
            />

            <div className="mt-6">

                {
                    food.length >= 2 &&
                    searchData.map((item) => (
                        <RestaurantManuInfo
                            key={item.id}
                            restData={item}
                        />
                    ))
                }

            </div>

        </div>
    );
}