const DOMselectors = {
  img: document.querySelector(".itemimg"),
  container: document.querySelector(".container")

}

const URL = `https://dummyjson.com/products`

function add(e){
 DOMselectors.container.insertAdjacentHTML('beforebegin', `<div class="card">
<p class="itemimage">
<img src="${e.image}" alt="${e.title}"></p>
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

function priceisright() {
 let base = newcards.price;
 let result;
 let omgvalue = priceright.value;
 if (omgvalue > base) {
   result = 'u lose';
 } else {
   result = 'u win !';
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
   for (let i = 0; i < arr.length; i++){
       if (arr[i] > arr[i-1]);
   }
 }  */
getData(URL)

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