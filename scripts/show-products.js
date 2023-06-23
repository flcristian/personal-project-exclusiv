function createProduct(data){
  // ADDING PRODUCT ITEM ARTICLE
  var productItem = document.createElement("article");
  productItem.classList.add("product-item");

  // ADDING PRODUCT IMAGE
  var productImage = document.createElement("img");
  productImage.classList.add("product-image");
  productImage.src = data.path;
  productImage.alt = '';

  // ADDING PRODUCT DESCRIPTION
  var productDescription = document.createElement("div");
  productDescription.classList.add('product-description');
  productDescription.textContent = data.description;

  // ADDING PRODUCT PRICE
  var productPrice = document.createElement("div");
  productPrice.classList.add("product-price");
  productPrice.textContent = data.price + " RON";

  // ADDING PRODUCT BUTTON
  var productButtonArea = document.createElement("aside");
  productButtonArea.classList.add("product-button");
  var productButton = document.createElement("a");
  productButton.classList.add("product-button-text");
  productButton.href = "contact.html";
  productButton.textContent = "Contact";
  productButtonArea.appendChild(productButton);

  // ADDING PROPERTIES TO PRODUCT ITEM
  productItem.appendChild(productImage);
  productItem.appendChild(productDescription);
  productItem.appendChild(productPrice);
  productItem.appendChild(productButtonArea);

  return productItem;
}

window.onload = function(){
    fetch('data/products.json')
    .then(response => response.json())
    .then(data => {
        var productList = document.getElementById('product-list');
        
        for(i = 0;i<data.length;i++){
           // ADDING PRODUCT ITEM TO LIST
           productList.appendChild(createProduct(data[i]));
        }
    });
}