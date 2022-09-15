let checkoutTotal = document.getElementById("checkout-total");
let cost = document.getElementById("cost");
let total = 0;
let adoptedDogs = [];
let checkingOut = document.getElementById('total-cost');


// Function to add total dollars to checkout. Figure out how to truncate the decimals to 2 places.
function addToCheckOutTotal(dogName) {

    if (!adoptedDogs.includes(dogName)) {
        adoptedDogs.push(dogName);

        total = total + Number(cost.textContent);
        localStorage.setItem('checkout', total);

        let finalTotal = localStorage.getItem('checkout');

        checkoutTotal.textContent = `$${finalTotal}`;
        checkingOut.textContent = `Total adoption cost: ${finalTotal}`;
    } else {
        alert("You've already selected this lucky puppy.");
    }
};