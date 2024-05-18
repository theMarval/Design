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
setInterval(()=>{
  let slidrg= document.getElementById("sest").click()
},5000)
}

{

  var el = document.querySelector(".conatianer");
  window.onscroll = () => {
    if (window.scrollY > 15) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    };
  }
}