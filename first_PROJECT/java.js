const btn=document.querySelector(".btn");
const container=document.querySelector(".container")

 btn.addEventListener("click",function(){
     container.classList.toggle("active");

 })
 const croix=document.querySelector(".croix")
croix.addEventListener("click",function(){
     container.classList.remove("active")
 })
