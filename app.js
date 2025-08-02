const url=" http://universities.hipolabs.com/search?country=United+States";
let para1=document.querySelector("#para");
const getFacts= async()=>{
let response= await fetch(url);
  console.log(response);

 let data = await response.json();
  console.log(data[1]);
  para1.innerText=data[1].name+data[1].country;

};
getFacts();