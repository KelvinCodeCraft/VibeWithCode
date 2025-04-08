class ShoppingCart {
    calculate_total(products) {
      let subtotal = 0;
  
      // Step 1: Calculate subtotal (price * quantity for each product)
      for (const product of products) {
        subtotal += product.price * product.quantity;
      }
  
      // Step 2: Apply 10% discount if subtotal > $100
      if (subtotal > 100) {
        subtotal *= 0.9; // same as subtracting 10%
      }
  
      // Step 3: Apply 8% sales tax
      const totalWithTax = subtotal * 1.08;
  
      // Round to 2 decimal places
      return totalWithTax.toFixed(2);
    }
  }
  
  // Example usage
  const cart = new ShoppingCart();
  
  const products = [
    { price: 30, quantity: 2 },
    { price: 50, quantity: 1 },
    { price: 40, quantity: 1 }
  ];
  
  const total = cart.calculate_total(products);
  console.log("Total amount (with discount and tax): $", total);
  