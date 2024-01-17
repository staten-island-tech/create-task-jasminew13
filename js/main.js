import '../css/style.css'
//import { DOMselectors } from './dom';

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
  
  let idk = function (arr){
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > arr[i-1]);
    }
  } 
  function add(stuff){
    stuff.forEach(a => {
            DOMselectors.container.insertAdjacentHTML("beforeend", `
            <div class="card">
    <p class="itemimage"><img src="${a.thumbnail}" alt=""></p></div>`)}); 
    }
  async function getData(){
    try {
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error (response.statusText);
        }
        const newimg = await response.json();
        add(newimg)
        add(stuff)
  
  
      const guesspri = document.getElementById("submitting");
      guesspri.addEventListener("click", function() {
      console.log("clickedd");

      })
  return newimg;
    } catch (error) {
        console.log(error,"uh oh");
    }
}
getData(URL)