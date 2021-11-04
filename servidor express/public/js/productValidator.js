function ge(element) {
  return document.getElementById(element);
}
window.addEventListener("load", function () {
  let inputName = ge("name"),
    errorName = ge("errorName"),
    description = ge("description"),
    errorDescription = ge("errorDescription"),
    season = ge("season"),
    errorSeason = ge("errorSeason"),
    category = ge("category"),
    errorCategory = ge("errorCategory"),
    price = ge("price"),
    errorPrice = ge("errorPrice"),
    color = ge("color"),
    errorColor = ge("errorColor"),
    size = ge("size"),
    errorSize = ge("errorSize"),
    stock = ge("stock"),
    errorStock = ge("errorStock"),
    fileUpload = ge("file-upload"),
    errorFileUpload = ge("errorFileUpload"),
    formAdd = ge("productForm"),
    submitErrors = ge('errorProductForm'),
    seasonInsert = ge("seasonInsert"),
    errorSeasonInsert = ge("insertSeason"),
    categoryInsert = ge("categoryInsert"),
    errorCategoryInsert = ge("insertCategory"),
    colorInsert = ge("colorInsert"),
    errorColorInsert = ge("insertColor"),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExNum = /^[0-9]{7,8}$/;

  inputName.addEventListener("blur", function () {
    switch (true) {
      case !inputName.value.trim():
        errorName.innerHTML = "El campo nombre es obligatorio";
        inputName.classList.add("errorValidator");
        break;
      case !regExAlpha.test(inputName.value):
        errorName.innerHTML = "Debes ingresar un nombre válido";
        inputName.classList.add("errorValidator");
        break;
      default:
        inputName.classList.remove("errorValidator");
        inputName.classList.add("isValid");
        errorName.innerHTML = "";
        break;
    }
  });
  description.addEventListener("blur", function () {
    switch (true) {
      case !description.value.trim():
        errorDescription.innerHTML = "Debes ingresar una descripción";
        description.classList.add("errorValidator");
        break;
      case !regExAlpha.test(description.value):
        errorDescription.innerHTML = "Debes ingresar una descripción válida";
        description.classList.add("errorValidator");
        break;
      default:
        description.classList.remove("errorValidator");
        description.classList.add("isValid");
        errorDescription.innerHTML = "";
        break;
    }
  });
  season.addEventListener("change", function () {
    switch (true) {
      case !season.value.trim():
        errorSeason.innerHTML = "Selecciona una temporada";
        season.classList.add("errorValidator");
        break;
      default:
        season.classList.remove("errorValidator");
        season.classList.add("isValid");
        errorSeason.innerHTML = "";
        break;
    }
  });
  category.addEventListener("change", function () {
    switch (true) {
      case !category.value.trim():
        errorCategory.innerHTML = "Selecciona una categoría";
        category.classList.add("errorValidator");
        break;
      default:
        category.classList.remove("errorValidator");
        category.classList.add("isValid");
        errorCategory.innerHTML = "";
        break;
    }
  });
  price.addEventListener("blur", function () {
    switch (true) {
      case !price.value.trim():
        errorPrice.innerHTML = "Ingresa un precio";
        price.classList.add("errorValidator");
        break;
      default:
        price.classList.remove("errorValidator");
        price.classList.add("isValid");
        errorPrice.innerHTML = "";
        break;
    }
  });
  color.addEventListener("change", function () {
    switch (true) {
      case !color.value.trim():
        errorColor.innerHTML = "Selecciona un color";
        color.classList.add("errorValidator");
        break;
      default:
        color.classList.remove("errorValidator");
        color.classList.add("isValid");
        errorColor.innerHTML = "";
        break;
    }
  });
  size.addEventListener("change", function () {
    switch (true) {
      case !size.value.trim():
        errorSize.innerHTML = "Selecciona un talle";
        size.classList.add("errorValidator");
        break;
      default:
        size.classList.remove("errorValidator");
        size.classList.add("isValid");
        errorSize.innerHTML = "";
        break;
    }
  });
  stock.addEventListener("blur", function () {
    switch (true) {
      case !stock.value.trim():
        errorStock.innerHTML = "Ingresa una cantidad";
        stock.classList.add("errorValidator");
        break;
      default:
        stock.classList.remove("errorValidator");
        stock.classList.add("isValid");
        errorStock.innerHTML = "";
        break;
    }
  });
  fileUpload.addEventListener("change", function fileValidation() {
    let filePath = fileUpload.value,
      allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i;
    if (!allowefExtensions.exec(filePath)) {
      errorFileUpload.innerHTML =
        "Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)";
      fileUpload.value = "";
      $imgPreview.innerHTML = "";
      return false;
    } else {
      console.log(fileUpload.files);
      if (fileUpload.files && fileUpload.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          $imgPreview.innerHTML = '<img src="' + e.target.result + '"/>';
        };
        reader.readAsDataURL(fileUpload.files[0]);
        errorFileUpload.innerHTML = "";
        fileUpload.classList.remove("errorValidator");
      }
    }
  });
  formAdd.addEventListener('submit',function(event){
    let error = false;
    event.preventDefault()
    let elementosForm = this.elements
    
    for (let index = 0; index < elementosForm.length-1; index++) {
        if(elementosForm[index].value == "" && elementosForm[index].name !== "archivo"){
            elementosForm[index].classList.add('errorvalidator');
            submitErrors.innerHTML = "Los campos señalados son obligatorios";
            error = true;
        }
    }

    if(!error){
        console.log('Todo bien');
        form.submit()
    }

})

  seasonInsert.addEventListener("blur", function () {
    switch (true) {
      case !seasonInsert.value.trim():
        errorSeasonInsert.innerHTML = "Ingrese una temporada";
        seasonInsert.classList.add("errorValidator");
        break;
      default:
        seasonInsert.classList.remove("errorValidator");
        seasonInsert.classList.add("isValid");
        errorSeasonInsert.innerHTML = "";
        break;
    }
  });
  categoryInsert.addEventListener("blur", function () {
    switch (true) {
      case !categoryInsert.value.trim():
        errorCategoryInsert.innerHTML = "Ingrese una categoría";
        categoryInsert.classList.add("errorValidator");
        break;
      default:
        categoryInsert.classList.remove("errorValidator");
        categoryInsert.classList.add("isValid");
        errorCategoryInsert.innerHTML = "";
        break;
    }
  });
  colorInsert.addEventListener("blur", function () {
    switch (true) {
      case !colorInsert.value.trim():
        errorColorInsert.innerHTML = "Ingrese una color";
        colorInsert.classList.add("errorValidator");
        break;
      default:
        colorInsert.classList.remove("errorValidator");
        colorInsert.classList.add("isValid");
        errorColorInsert.innerHTML = "";
        break;
    }
  });
});
