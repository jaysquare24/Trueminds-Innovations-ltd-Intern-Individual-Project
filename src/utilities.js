export function formatCurrency(amount) {
  return Number(amount).toLocaleString(undefined, { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  });
}

export function getSubTotal(items) {
  const total = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return formatCurrency(total);
}

export function getShippingFee(items) {
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);
  const price = totalQty * 2; 
  
  return price;
}


export function getGrandTotal(items) {
  const amount = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
 
  const total = amount + getShippingFee(items)

  return formatCurrency(total);
}