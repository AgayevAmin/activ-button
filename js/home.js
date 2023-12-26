var  historytab =document.getElementById("history-tab")
var  visiontab=document.getElementById("vision-tab")
var  goalstab=document.getElementById("goals-tab")
var  historytext=document.querySelector(".history-text")
var  visiontext=document.querySelector(".vision-text")
var  goalstext=document.querySelector(".goals-text")



historytab.addEventListener("click" , function(){
    historytext.classList.remove("hidden")
    visiontext.classList.add("hidden")
    goalstext.classList.add("hidden")

})

visiontab.addEventListener("click" , function(){
  visiontext.classList.remove("hidden")
  historytext.classList.add("hidden")
  goalstext.classList.add("hidden")

})


goalstab.addEventListener("click" , function(){
  goalstext.classList.remove("hidden")
  historytext.classList.add("hidden")
  visiontext.classList.add("hidden")
})
