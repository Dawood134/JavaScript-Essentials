let cardsContainer=document.querySelector(".cards-container");
let searchCard=document.querySelector(".text");
let dropDown=document.getElementById("sortDropDown");
searchCard.addEventListener("input",()=>{
    let searchText = searchCard.value.toLowerCase();
    console.log(searchText);
    
   cardCollectorArray.forEach(item => {

        if (item.name.includes(searchText)) {
           item.card.style.display = 'block'; 
        } else {
            item.card.style.display = 'none'; 
        }
    });
})
dropDown.addEventListener("change",()=>{
    if(dropDown.value==="low-to-high"){
        cardCollectorArray.sort((a,b)=>a.price-b.price);
        cardsContainer.innerHTML="";

         cardCollectorArray.forEach(item => {
           cardsContainer.appendChild(item.card);

    });
    }
       else if(dropDown.value==="high-to-low"){
        cardCollectorArray.sort((a,b)=>b.price-a.price);
        cardsContainer.innerHTML="";

         cardCollectorArray.forEach(item => {
           cardsContainer.appendChild(item.card);

    });
    }
})
let cardCollectorArray=[];
async function cardsGenerator(){
    let response= await fetch('Products.json');
     let requestData= await response.json();
    requestData.forEach(element => {
        let cardDiv=document.createElement("div");
        let h2=document.createElement("h2");
        let price=document.createElement("lable");
        let productDescription=document.createElement("p");



        cardDiv.appendChild(h2);
        cardDiv.appendChild(price);
        cardDiv.appendChild(productDescription);


        h2.innerText= "DeviceName : "+element.name;
        price.innerText= "Price: "+element.price;
        productDescription.innerText= "Description : "+element.description;

          cardCollectorArray.push({
            name: element.name.toLowerCase(), 
            price:element.price,
            card: cardDiv
        });
         cardDiv.className="card";
        cardsContainer.appendChild(cardDiv);
    });
}
 cardsGenerator();