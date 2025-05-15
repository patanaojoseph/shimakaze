export const formatCurrency = (amount: number | null) => {
  if (amount === null) return "";

  const poundsAmount = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amount);

  return poundsAmount;
};

// export const formatCurrency = (amount: number | null) => {
//   const value = amount || 0;
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   }).format(value);
// };
