// let checkoutTotal = document.getElementById("checkout-total");
// let cost = document.getElementById("cost");
// let total = 0;
// let formTotalCost = document.getElementById("total-cost");
// let adoptedDogs = [];


// Function to add total dollars to checkout. Figure out how to truncate the decimals to 2 places.
// function addToCheckOutTotal(dogName) {

//   if (!adoptedDogs.includes(dogName)) {
//     adoptedDogs.push(dogName);
//     total = total + Number(cost.textContent);
//     localStorage.setItem('checkout-total', total);
//     console.log(localStorage.getItem('checkout-total'));
//     checkoutTotal.textContent = `$${localStorage.getItem('checkout-total')}`;
//   } else {
//     alert("You've already selected this lucky puppy.");
//   }

// };



// Function to alert the user of the dog's name when they click on a dog's card.
function dogInfo(dogName) {
  alert(`This dog is named ${dogName}, and the adoption cost is $123.45.`);
}




// Puts a box shadow around the cards listing all the puppies.
$('.container article').mouseenter(function () {
  $(this).fadeTo(300).css("box-shadow", "10px 10px #ECECEC");;
}).mouseout(function () {
  $(this).fadeTo(300).css("box-shadow", "none");
});



// Form submit for new blog post
// const articleContainer = document.getElementById("blog-posts-container");
// const postForm = document.getElementById("new-post-form");

// postForm.addEventListener("submit", function (event) {

//   event.preventDefault();

//   let blogTitle = document.getElementById("blog-title");
//   let post = document.getElementById("blog-words");

//   let articleImg = document.createElement("img");
//   articleImg.setAttribute('src', 'images/blog-2.jpg');
//   articleImg.setAttribute('class', 'blog-img');
//   let artDiv = document.createElement("div");
//   artDiv.setAttribute('class', 'blog-text');
//   let articleTitle = document.createElement("h3");
//   articleTitle.innerHTML = blogTitle.value;
//   console.log(articleTitle);
//   let articleContent = document.createElement("p");
//   articleContent.innerHTML = post.value;
//   console.log(articleContent);

//   let newArticle = document.createElement('article');
//   newArticle.appendChild(articleImg);
//   newArticle.appendChild(artDiv);
//   artDiv.appendChild(articleTitle);
//   artDiv.appendChild(articleContent);
//   articleContainer.insertBefore(newArticle, articleContainer.firstChild);

//   alert("Thank you. The form information has been received.");
//   blogTitle.value = '';
//   post.value = '';

// });
