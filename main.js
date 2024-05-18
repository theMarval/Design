{
    let btnopen = document.querySelector("#chk")
    let btnclose = document.querySelector(".hidemenu")
    let menu =document.querySelector(".menu")
    btnopen.addEventListener("click",()=>{
      menu.classList.toggle('active')
    });
   
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


  // loading/////
  // loading/////
  // loading/////
    let body = document.querySelector('body')
    window.addEventListener('load', () => {
        setTimeout(() => {
            var loader = document.querySelector('.mainloader')
            loader.style.display = 'none'
        }, 1000)
    })