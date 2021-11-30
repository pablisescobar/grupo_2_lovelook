window.addEventListener("load", () => {
  let filterProducts = document.getElementById("filterProducts");
  let colorSelect = document.getElementById("colorSelect");
  let sizeSelect = document.getElementById("sizeSelect");
  let priceSelect = document.getElementById("priceSelect");
  let articles = document.querySelectorAll("article");
  let sectionProducts = document.getElementById('sectionProducts');
  let accountant = document.getElementById('accountantProducts');


  filterProducts.addEventListener("click", () => {
      
      let products = []
      if(colorSelect.value != '' && sizeSelect.value != '' && priceSelect != ''){
        articles.forEach((article) => {
            if (
                article.getAttribute("color") != colorSelect.value ||
                article.getAttribute("size") != sizeSelect.value ||
                article.getAttribute("price") > priceSelect.value
            ) {
                article.style.display = "none";
            } else {
                article.style.display = "block";
            }
            });
      }
      
            articles.forEach(ar => {
            if(ar.style.display == 'none'){
                products.push(ar)
            }
        })
        if(products.length == accountant.value){
            sectionProducts.innerHTML+= '<p>No hay productos</p>'
        }
        
  });
  
  
});

articles.forEach(article => {
        article.style.display = "block";
      });
