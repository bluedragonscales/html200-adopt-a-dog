// let formTotalCost = document.getElementById("total-cost");



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