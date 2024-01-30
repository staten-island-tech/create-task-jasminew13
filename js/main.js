import '../css/style.css'
import { DOMselectors } from './dom'


const URL = `https://dummyjson.com/products`


/* function filtering (newcards){
   const searchingvalue = document.getElementById("bsearch").value.trim();
   console.log("Searching Value", searchingvalue);
   const avenues = newcards.filter((newcard) => newcard.appronstre.includes(searchingvalue));
   console.log("Avenues", avenues)
   clearFields();
    if (priceright.length === 0){
     DOMselectors.container.insertAdjacentHTML('beforebegin', `<h2> no open streets for ${searchingvalue}</h2>`);
   } else {
     add(avenues);
   }
 }*/ 
function add(e){
let data = URL.
 DOMselectors.container.insertAdjacentHTML('beforebegin', `<div class="card">
<p class="itemimage"><img src="${e.image}" alt=""></p>
</div>`)
}
async function getData(){
 try {
     const response = await fetch(URL);
     if (response.status != 200) {
         throw new Error (response.statusText);
     }
     const newcards = await response.json();
     add(newcards)
let base = newcards.price
function priceisright(p) {
 let result;
 if (p > base) {
   result = 'u win!';
 } else {
   result = 'u lose :(';
 }
 return result;
}
priceisright()

return newcards;
 } catch (error) {
     console.log(error,"uh oh");
 }
}


/*   let idk = function (arr){
   for (let i = 1; i < arr.length; i++){
       if (arr[i] > arr[i-1]);
   }
 }  */
getData(URL)

