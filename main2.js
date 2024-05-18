
//////first slide//////////////
{
let reviewImg = 1
netImg(reviewImg)
function prfl_sld(e){
  netImg(reviewImg = e)
}
function pfl_sld(e){netImg(reviewImg +=e)}
function netImg(e){
  let i = 1;
  let gsm = document.querySelectorAll(".jet .prfl")
  let slidl = document.querySelectorAll(".profileslid span")
  if(e>gsm.length){reviewImg =1}
  if(e<1){reviewImg = gsm.length}
  for(i=0 ;i<gsm.length;i++)
  gsm[i].style.display= "none";
  for(i=0 ;i<slidl.length;i++)
  slidl[i].style.background = "transparent";
  for(i=0 ;i<slidl.length;i++)
  gsm[reviewImg-1].style.display= "block";
  gsm[reviewImg-1].style.opacity= "1";
  slidl[reviewImg-1].style.background = "rgba(103 107 145 / 75%)";
}
setInterval(()=>{
  let slidrg= document.getElementById("cest").click()
},5000)
}



///////////second slide /////////////
{
var indexImg = 1
showImg(indexImg)
function btn_slide(e){
  showImg(indexImg = e)
}
function sld_slide(e){showImg(indexImg +=e)
  
}
function showImg(e){
  var i = 1;
  let ims = document.querySelectorAll(".slid")
  let slider = document.querySelectorAll(".slider span")
  if(e>ims.length){indexImg =1}
  if(e<1){indexImg = ims.length}
  for(i=0 ;i<ims.length;i++)
  ims[i].style.display= "none";
  for(i=0 ;i<slider.length;i++)
  slider[i].style.background = "transparent";
  for(i=0 ;i<slider.length;i++)
  ims[indexImg-1].style.display= "block";

  slider[indexImg-1].style.background = "black";
}
setInterval(()=>{
  let sliderd = document.getElementById("nest")
  sliderd.click()
},5000)
}

//////////////third slide////////////////
//// review section/////

{
let reviewImg = 1
netImg(reviewImg)
function rsv_sld(e){
  netImg(reviewImg = e)
}
function rvw_sld(e){netImg(reviewImg +=e)}
function netImg(e){
  let i = 1;
  let gsm = document.querySelectorAll(".rew")
  let slidl = document.querySelectorAll(".reviewslid span")
  if(e>gsm.length){reviewImg =1}
  if(e<1){reviewImg = gsm.length}
  for(i=0 ;i<gsm.length;i++)
  gsm[i].style.display= "none";
  for(i=0 ;i<slidl.length;i++)
  slidl[i].style.background = "transparent";
  for(i=0 ;i<slidl.length;i++)
  gsm[reviewImg-1].style.display= "block";
  gsm[reviewImg-1].style.opacity= "1";
  slidl[reviewImg-1].style.background = "white";
}
}
{
  var sl = document.querySelector(".archv");
  window.addEventListener("scroll",()=>{
  if (window.scrollY > 1000) {
    sl.style.animation = "cons 2s alternate";
  } else {
    sl.style.animation = "None";
  };
})
}

