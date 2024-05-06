function addDecimals(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}


export function calcPrices(orderItems) {

  const itemsPrice = orderItems.reduce(
    (acc, item) => acc + (item.price * 100 * item.qty) / 100,
    0
  );

  // Calculate the shipping price
  const shippingPrice = itemsPrice > 100 ? 0 : 10;

  // Calculate the tax price
  const taxPrice = 0.15 * itemsPrice;

  // Calculate the total price
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  // return prices as strings fixed to 2 decimal places
  return {
    itemsPrice: addDecimals(itemsPrice),
    shippingPrice: addDecimals(shippingPrice),
    taxPrice: addDecimals(taxPrice),
    totalPrice: addDecimals(totalPrice),
  };
}
