let endPage = document.querySelector('.endPage')
  
let a =  window.addEventListener("scroll", function(e){
    let sY= window.scrollY;
    let ypos = window.innerHeight;
  

    

          if (sY > ypos) {
            endPage.classList.add("show-endPage");
          }
          else{
            endPage.classList.remove("show-endPage");
          }
       
  });

  endPage.addEventListener("click",function(){
     window.scroll({
           top: 100000,
           behavior: 'smooth'
         })
         setTimeout(() => {
           endPage.classList.remove("show-endPage");
         }, 1500);
      
  })