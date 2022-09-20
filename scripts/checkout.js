let checkoutTotal = document.getElementById("checkout-total");
let adoptedDogs = [];
let checkingOut = document.getElementById('total-cost');
let total = 0;



// Function to add total dollars to checkout. Figure out how to truncate the decimals to 2 places.
function addToCheckOutTotal(dogName) {

    if (!adoptedDogs.includes(dogName)) {
        // If the array called "adoptedDogs" does not contain the name of the dog clicked on then this function will add that dog to the array.
        adoptedDogs.push(dogName);
        // The array of adopted dogs is stringified and saved in local storage to get passed from page to page.
        localStorage.setItem('dogs', JSON.stringify(adoptedDogs));

        // Adding the adoption cost to the total for every dog that is chosen.
        total = total + 123.45;
        console.log(total);

        // The final total is saved in the local storage.
        localStorage.setItem('checkout', total);
        console.log(localStorage.getItem('checkout'));

    } else {
        // This alert displays if you try to choose a puppy you've already chosen.
        alert("You've already selected this lucky puppy.");
    }
};


let checkoutDogs = document.getElementById('dogs-adopted');
let dogsList = document.createElement('ul');

// If there is an item stored in the local storage called "checkout" then run this block of code.
if(localStorage.getItem('checkout')) {
    // Assigning the checkout dollar total to the top banner and to the checkout page's bottom total.
    checkoutTotal.textContent = `$${localStorage.getItem('checkout')}`;
    checkingOut.textContent = `$${localStorage.getItem('checkout')}`;
    
    // Parsing the array that was stored inside local storage back to a regular array.
    let dogsCheckout = JSON.parse(localStorage.getItem('dogs'));
    console.log(dogsCheckout);

    dogsCheckout.forEach(element => {
        // For each dog in the array, create a "li" element, assign a dog to that li element, and then append all those li elements to the ul element called "dogsList".
        let dogItem = document.createElement('li');
        dogItem.textContent = element;
        dogsList.appendChild(dogItem);
    });

    // Append the filled dogsList to the end of the div element called "checkoutDogs".
    checkoutDogs.appendChild(dogsList);
    
} else {
    checkoutTotal.textContent = "$0";
}