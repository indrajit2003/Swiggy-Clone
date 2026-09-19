import { useState } from "react";
import RestaurantManuInfo from "./RestaurantMenuInfo";

export default function RestaurantMenuCard({ menuItems,foodSelected }) {

    const [isOpen, setIsOpen] = useState(true);
    

    if ("categories" in menuItems) {
        return (
            <div className="w-full mb-2 pb-2">

                <p className="text-3xl font-bold mt-10 mb-4">
                    {menuItems.title}
                </p>

                <div>
                    {
                        menuItems?.categories?.map((items) => (
                            <RestaurantMenuCard
                                key={items.title}
                                menuItems={items}
                                foodSelected={foodSelected}
                            />
                        ))
                    }
                </div>

            </div>
        );
    }
    if(foodSelected==='veg'){
        return(
              <div className="w-full">

            <div className="flex justify-between w-full">

                <p className="text-3xl font-bold mt-10 mb-4">
                     {menuItems.title}
                </p>

                <button
                    className="  text-8xl mb-10 mr-10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "˰" : "˯"}
                </button>
            </div>

            {
                isOpen && (
                    <div>
                        {
                            menuItems?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items) => (
                                <RestaurantManuInfo
                                    key={items?.card?.info?.id}
                                    restData={items?.card?.info}
                                />
                            ))
                        }
                    </div>
                )
            }
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }
    if(foodSelected==='nonveg'){
        return(
              <div className="w-full">

            <div className="flex justify-between w-full">

                <p className="text-3xl font-bold mt-10 mb-4">
                     {menuItems.title}
                </p>

                <button
                    className="  text-8xl mb-10 mr-10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "˰" : "˯"}
                </button>
            </div>

            {
                isOpen && (
                    <div>
                        {
                            menuItems?.itemCards?.filter((food)=> !("isVeg" in food?.card?.info) ).map((items) => (
                                <RestaurantManuInfo
                                    key={items?.card?.info?.id}
                                    restData={items?.card?.info}
                                />
                            ))
                        }
                    </div>
                )
            }
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }
    return (
          <div className="w-full">

            <div className="flex justify-between w-full">

                <p className="text-3xl font-bold mt-10 mb-4">
                     {menuItems.title}
                </p>

                <button
                    className="  text-8xl mb-10 mr-10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "˰" : "˯"}
                </button>
            </div>

            {
                isOpen && (
                    <div>
                        {
                            menuItems?.itemCards?.map((items) => (
                                <RestaurantManuInfo
                                    key={items?.card?.info?.id}
                                    restData={items?.card?.info}
                                />
                            ))
                        }
                    </div>
                )
            }
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        
    );
}