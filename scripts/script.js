let checkoutTotal = document.getElementById("checkout-total");
let cost = document.getElementById("cost").textContent;
let total = 0;
let formTotalCost = document.getElementById("total-cost");

// Function to add total dollars to check out. Figure out how to truncate the decimals to 2 places.
function addToCheckOutTotal(){
  total = total + Number(cost);
  checkoutTotal.textContent = "$" + total;
  alert("Your total is now: $" + total);
};



function murphy(){
  let name = document.getElementsByTagName("h4")[0].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function poppy(){
  let name = document.getElementsByTagName("h4")[1].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function jack(){
  let name = document.getElementsByTagName("h4")[2].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function duffy(){
  let name = document.getElementsByTagName("h4")[3].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function lucas(){
  let name = document.getElementsByTagName("h4")[4].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function jake(){
  let name = document.getElementsByTagName("h4")[5].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function angus(){
  let name = document.getElementsByTagName("h4")[6].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function violet(){
  let name = document.getElementsByTagName("h4")[7].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function piper(){
  let name = document.getElementsByTagName("h4")[8].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function maximus(){
  let name = document.getElementsByTagName("h4")[9].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function luna(){
  let name = document.getElementsByTagName("h4")[10].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function stella(){
  let name = document.getElementsByTagName("h4")[11].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};




// JQUERY FUNCTIONS
$('article').mouseenter(function() {
  $(this).fadeTo(300).css("box-shadow", "10px 10px #ECECEC");;
}).mouseout(function(){
  $(this).fadeTo(300).css("box-shadow", "none");
});




// Console log the form data.
$('#adoption-form').submit(function() {
  var values = $(this).serialize();
  console.log(values);
});
