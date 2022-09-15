let checkoutTotal = document.getElementById("checkout-total");
let cost = document.getElementById("cost");
let total = 0;
let adoptedDogs = [];


// Function to add total dollars to checkout. Figure out how to truncate the decimals to 2 places.
function addToCheckOutTotal(dogName) {

    if (!adoptedDogs.includes(dogName)) {
      adoptedDogs.push(dogName);
      total = total + Number(cost.textContent);
      localStorage.setItem('checkout-total', total);
      console.log(localStorage.getItem('checkout-total'));
      checkoutTotal.textContent = `$${localStorage.getItem('checkout-total')}`;
    } else {
      alert("You've already selected this lucky puppy.");
    }
  
  };