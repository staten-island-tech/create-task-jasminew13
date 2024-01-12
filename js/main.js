import '../css/style.css'
import { DOMselectors } from './dom';

const URL = `https://dummyjson.com/products`

/* function filtering (newcards){
    const searchingvalue = document.getElementById("bsearch").value.trim();
    console.log("Searching Value", searchingvalue);
    const avenues = newcards.filter((newcard) => newcard.appronstre.includes(searchingvalue));
    console.log("Avenues", avenues)
    clearFields();
  
    if (searchingvalue.length === 0){
      DOMselectors.container.insertAdjacentHTML('beforebegin', `<h2> no open streets for ${searchingvalue}</h2>`);
    } else {
      add(avenues);
    }
  }  let idk = function (arr){
    for (let i = 1; i < arr.length; i++){
        if ()
    }
  } */
  async function getData(){
    try {
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error (response.statusText);
        }
        const newimg = await response.json();
        add(newimg)
  
  
      const guesspri = document.getElementById("priceright");
      guesspri.addEventListener("click", function() {
      console.log("clickedd");
      })
  return newimg;
    } catch (newimg) {
        console.log(error,"uh oh");
    }
}
getData(URL)