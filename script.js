

function firstPage(){
  let box = document.querySelector(".box");
   box.innerHTML = "";
  if (box) {
    let h1 = document.createElement("h1");
    h1.textContent = "How did you travel today?";
    h1.classList.add("headingOne");
    box.appendChild(h1);
  }
  let select = document.createElement("select")
  select.classList.add("dropDown")
  let options=["walk","bike","car","metro","bus","EV"]
  options.forEach(items=>{
      let option=document.createElement("option")
      option.textContent =items;
      select.appendChild(option);
    })
    box.appendChild(select)
  let h2 = document.createElement("h2");
    h2.textContent = "Distance(Km)";
    h2.classList.add("headingtwo");
    box.appendChild(h2);

  let input=document.createElement("input")
  input.type="number";
  input.placeholder="Enter Distance"
  box.appendChild(input)
  
  let result=document.createElement("div")
  result.classList.add("estimatedResult")
  result.textContent="Estimated Result:"
  box.appendChild(result)
}

function secondPage(){
  let box=document.querySelector(".box")
  box.innerText="";
  box.style.height="500px"
  let h1=document.createElement("h1")
  h1.classList.add("electricityUsage")
  h1.textContent="Electricity Usage (Hours)"
  box.appendChild(h1)
  
  let ac =document.createElement("h3")
  ac.classList.add("ac")
  ac.textContent="AC"
  box.appendChild(ac)
  
  let input=document.createElement("input")
  input.type="number";
  input.placeholder=""
  box.appendChild(input)
  
  let fan =document.createElement("h3")
  fan.classList.add("fan")
  fan.textContent="Fan"
  box.appendChild(fan)

  input=document.createElement("input")
  input.type="number"
  box.appendChild(input)


  let tv =document.createElement("h3")
  tv.classList.add("tv")
  tv.textContent="TV"
  box.appendChild(tv)

   input=document.createElement("input")
  input.type="number"
  box.appendChild(input)


  let laptop =document.createElement("h3")
  laptop.classList.add("laptop")
  laptop.textContent="Laptop"
  box.appendChild(laptop)
  
  input=document.createElement("input")
  input.type="number"
  box.appendChild(input)

  let wm =document.createElement("h3")
  wm.classList.add("wm")
  wm.textContent="Washing Machine"
  box.appendChild(wm)
  
   input=document.createElement("input")
  input.type="number"
  box.appendChild(input)
  
}

function thirdPage(){
  let box= document.querySelector(".box")
  box.innerText="";
  box.style.height="300px"

  let dietHeading=document.createElement("h1")
  dietHeading.innerText="What was your diet today ? "
  box.appendChild(dietHeading)
  
  let btnParent=document.createElement("div")
  btnParent.classList.add("btnParent")
  let options = ["Vegetarian","Non - Vegetarian","Eggetarian","Vegan"]
    options.forEach(items=>{
      let typeBtn = document.createElement("button")
      typeBtn.textContent=items;
      btnParent.appendChild(typeBtn)
    typeBtn.style.height="70px"
    typeBtn.style.width="90px"
    typeBtn.style.borderRadius="50px"
  })
  box.appendChild(btnParent)
}

function fourthPage(){
  let box= document.querySelector(".box")
  box.innerText="";
  box.style.height="200px"
  
  let waterHeading=document.createElement("h1")
  waterHeading.innerText="Water Usage"
  box.appendChild(waterHeading)

  let waterAmt=document.createElement("h3")
  waterAmt.innerText="How much water did you used today ? "
  box.appendChild(waterAmt)

  let select=document.createElement("select")
  select.classList.add("waterUsage")
  let options=["Low (quick showers, basic use)","Medium (normal daily use)","High (long showers, laundry)"," Heavy (car wash, multiple baths)"]
  options.forEach(items=>{
    option=document.createElement("option")
    option.innerText=items
    select.appendChild(option)
  })
  box.appendChild(select)
}
function fifthPage(){
  let box= document.querySelector(".box")
  box.innerText="";
  let result=document.createElement("h1")
  result.innerText="Your total carbon emissions :"
  box.appendChild(result)
}

let track = document.querySelector(".trackButton");
if (track) {
  track.addEventListener("click", () => {
    window.location.href = "question.html";
  });
}
window.addEventListener("DOMContentLoaded" ,()=>{
  firstPage()
})
document.querySelector(".next").addEventListener("click",()=>{

})

let currentPage=0
let pages=[firstPage,secondPage,thirdPage,fourthPage,fifthPage]
let next= document.querySelector(".next")
next.addEventListener("click",()=>{
  if(currentPage<pages.length-1){
    pages[(currentPage+1)]();
    currentPage++

  }
})
let back=document.querySelector(".back")
back.addEventListener("click",()=>{
  if(currentPage>0){
    currentPage--
    pages[currentPage]()}
})

