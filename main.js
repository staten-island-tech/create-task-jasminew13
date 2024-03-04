import { products } from './array.js'
const DOMselectors = {
    container: document.querySelector(".container"),
    result: document.querySelector(".result"),
    firstguess: document.getElementById("startGuess"),
    guessinput: document.getElementById("priceright")
  }
 // const correctanswer = products.price;

/*   for (let i = 1; i < 8; i++) {
    var item = products.splice(Math.floor(Math.random() * (products.length)), 1)[0];

    var el = document.querySelector(".card");
        el.innerHTML= "   " + `name: ${item.item}` + `<div class="hideprice">${item.price}</div>` + `<img class="itemimage" src="${item.img}" alt="">`;
}  */


function personsguess(){
  for (let i = 1; i < 8; i++) {
    var item = products.splice(Math.floor(Math.random() * (products.length)), 1)[0];

    var el = document.querySelector(".card");
        el.innerHTML= "   " + `name: ${item.item}` + `<div class="hideprice">${item.price}</div>` + `<img class="itemimage" src="${item.img}" alt="">`;
} 
  DOMselectors.firstguess.addEventListener("submit", function (e) {
    e.preventDefault();
     var personguess = DOMselectors.guessinput.value;
     var realprice = item.price
      if (personguess == realprice) {
         DOMselectors.result.textContent = "correct, good job!";
      }
      else if (personguess > realprice){
        return DOMselectors.result.textContent = `too high, the answer was $${item.price}`;
      }
      else {
        return DOMselectors.result.textContent = `too low, the answer was $${item.price}`;
      }

    console.log(DOMselectors.guessinput.value, realprice);
    }); 

}   
personsguess();

//document.addEventListener('change', e => e.target?.matches('itemprice') && validateAnswer());
/*   
    function priceGuess() {

   for (let i = 0; i < products.length; i++) {
      if (personsguess !== products[i].price) {
        return DOMselectors.result.textContent = "correct";
      }
      else if (personsguess > products[i].price){
        return DOMselectors.result.textContent = "too high";
      }
      else {
        return DOMselectors.result.textContent = "too low";
      }
    }
  }
  priceGuess() */