let checkoutTotal = document.getElementById("checkout-total");
let adoptedDogs = [];
let checkingOut = document.getElementById('total-cost');
let total = 0;


// Function to add total dollars to checkout. Figure out how to truncate the decimals to 2 places.
function addToCheckOutTotal(dogName) {

    if (!adoptedDogs.includes(dogName)) {
        adoptedDogs.push(dogName);

        total = total + 123.45;
        console.log(total);

        localStorage.setItem('checkout', total);
        console.log(localStorage.getItem('checkout'));

    } else {
        alert("You've already selected this lucky puppy.");
    }
};


if(localStorage.getItem('checkout')) {
    checkoutTotal.textContent = `$${localStorage.getItem('checkout')}`;
    checkingOut.textContent = `$${localStorage.getItem('checkout')}`;

    adoptedDogs.forEach(function(value) {
        let showDogsAdopted = document.getElementById('dogs-adopted');
        let dogList = document.createElement('ul');
        dogList.innerHTML = `<li>${value}</li>`;
    
        showDogsAdopted.appendChild(dogList);
    });
} else {
    checkoutTotal.textContent = "$0";
}



// let array2 = [];
// array.forEach(function(value, key){
//   console.log("value is " + value + " and key is " + key);
// });

// adoptedDogs.forEach(function(value) {
//     console.log(value);
// })