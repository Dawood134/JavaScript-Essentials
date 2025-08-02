let cardsContainer=document.querySelector(".cards-container");
let searchCard=document.querySelector(".text");
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
            card: cardDiv
        });
         cardDiv.className="card";
        cardsContainer.appendChild(cardDiv);
    });
}
 cardsGenerator();