/*Fonctionnalite 1*/

var footerEl = document.querySelector("footer");  //Pourquoi le ByTagName ne marche pas ac le footer
var onButtonCLick = function() {
  console.log("clique")
};
footerEl.addEventListener("click", onButtonCLick);
/*-----------------------------------------------------------------------*/



/*Fonctionnalite 1-bis*/

var footerEl = document.querySelector("footer");  //Pourquoi le ByTagName ne marche pas ac le footer
var number = 1
var onButtonCLick = function() {
  console.log("clic" + `${number}`)
  number += 1
};
footerEl.addEventListener("click", onButtonCLick);
/*-----------------------------------------------------------------------*/



/*Fonctionnalite 2*/

var navbarHeaderEl = document.getElementById("navbarHeader");
var hamburgerIcon = document.querySelector(".navbar-toggler-icon");


function deleteAddClassCollapse() {
  navbarHeaderEl.classList.toggle("collapse");
};

hamburgerIcon.addEventListener("click", deleteAddClassCollapse);
/*-----------------------------------------------------------------------*/



/*Fonctionnalite 3*/

var editButtonFirstCard = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]
var textFirstCard = document.getElementsByClassName("card mb-4 box-shadow")[0]

var cardInRed = function() {
  textFirstCard.style = "color:red"
}

editButtonFirstCard.addEventListener("click", cardInRed);
/*-----------------------------------------------------------------------*/



/*Fonctionnalite 4*/

var editButtonSecondCard = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]
var textSecondCard = document.getElementsByClassName("card mb-4 box-shadow")[1]

var cardInGreen = function() {
  if(textSecondCard.style.color === "green") {
    textSecondCard.style = "color: '' ";
  } else {
    textSecondCard.style = "color:green";
  }
};

editButtonSecondCard.addEventListener("click", cardInGreen);
/*-----------------------------------------------------------------------*/



/*Fonctionnalite 5*/

var navbarEl = document.querySelector("div.navbar");
var bootstrapLink = document.getElementsByTagName("link")[0];
console.log(navbarEl)
console.log(bootstrapLink)

var doubleClick = function() {
  if(bootstrapLink.disabled === false) {
    bootstrapLink.disabled = true;
  } else {bootstrapLink.disabled = false
  }
};

navbarEl.addEventListener("dblclick", doubleClick);
/*-----------------------------------------------------------------------*/



/*Fonctionnalite 6*/

var viewCard = document.getElementsByClassName("btn btn-sm btn-success");

for (let i = 0; i < viewCard.length; i++){
  viewCard[i].addEventListener("mouseover", function(){
  document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
  document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
  })
};
/*-----------------------------------------------------------------------*/