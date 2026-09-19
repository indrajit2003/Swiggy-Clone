import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function RestHeader() {

    const counter = useSelector(
        state => state.cartslice.items
    );

    const totalItems = counter.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <div className="w-full sticky top-0 z-50 bg-white shadow-md px-10 py-4 flex items-center justify-between">

            {/* Logo */}
            <div>
                <img
                    className="w-40 h-12 object-contain bg-orange-800 rounded-2xl"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
                />
            </div>


            {/* Navigation */}
            <div className="flex items-center gap-12 text-xl font-semibold">

                <a
                    target="_blank"
                    href="https://www.swiggy.com/corporate/"
                    className="hover:text-orange-600 transition duration-200"
                >
                    Swiggy Corporate
                </a>

                <Link
                    to="/Checkout"
                    className="hover:text-orange-600 transition duration-200"
                >
                    🛒 Cart ({totalItems})
                </Link>

            </div>

        </div>
    );
}