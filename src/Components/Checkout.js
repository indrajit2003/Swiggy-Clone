import { useSelector } from "react-redux";

export default function Checkout() {

  const items = useSelector(state => state.cartslice.items);

  const totalPrice = items.reduce((total, item) => {
    const price = "defaultPrice" in item
      ? item.defaultPrice
      : item.price;

    return total + (price / 100) * item.quantity;
  }, 0);

  return (
    <div className="w-[80%] mx-auto mt-10">

      <h1 className="text-4xl font-bold mb-8">
        Your Cart
      </h1>

      {
        items.map(value => {

          const price = "defaultPrice" in value
            ? value.defaultPrice
            : value.price;

          return (
            <div
              key={value.id}
              className="flex items-center justify-between border-b py-6"
            >

              {/* Name + Image */}
              <div className="flex items-center gap-8">

                <img
                  className="h-32 w-32 rounded-2xl object-cover"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                    value.imageId
                  }
                />

                <div>
                  <h2 className="text-2xl font-bold">
                    {value.name}
                  </h2>

                  <p className="text-lg mt-2">
                    Price: ₹{(price / 100).toFixed(0)}
                  </p>
                </div>

              </div>

              {/* Quantity */}
              <div className="text-xl font-semibold">
                Item: {value.quantity}
              </div>

              {/* Total for this item */}
              <div className="text-xl font-bold">
                ₹{((price / 100) * value.quantity).toFixed(0)}
              </div>

            </div>
          );
        })
      }

      {/* Grand Total */}
      <div className="flex justify-end mt-10">
        <div className="text-3xl font-bold border-t pt-5">
          Total Price: ₹{totalPrice.toFixed(0)}
        </div>
      </div>

    </div>
  );
}