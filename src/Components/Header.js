
export default function Header(){
    return(
         <header className="bg-[#c21010] font-bold">
           <div className="flex justify-between container mx-auto py-8">
              <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
              <div className="text-white font-serif text-base font-bold flex gap-15 items-center">
                <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                <a target="_blank" href="https://partner.swiggy.com/food/login">Partner With Us</a>
                <a className="border border-white py-3 px-4 rounded-xl ">Get the App</a>
                <a className="border border-black bg-black py-3 px-4 rounded-2xl">sign in</a>
              </div>

           </div>
           <div className="pt-16 pb-8 relative">
              <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
              <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
              <div className="text-5xl text-white max-w-[60%] container mx-auto text-center">
                  Order Food & Groceries. Discover best restaurants. Swiggy it!
              </div>
              <div className="max-w-[70%] flex gap-10 container mx-auto mt-5 justify-center">
                 <input className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl" placeholder="Goa,India"></input>
                 <input className="bg-white border  w-[50%] text-xl px-6 py-4 rounded-2xl" placeholder="Search for restaurents and items for more"></input>

              </div>
           </div>
           <div className="max-w-[80%] container mx-auto flex">
                <a href="https://www.swiggy.com/restaurants">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                </a>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                </a>
           </div>
         </header>
    )
}

