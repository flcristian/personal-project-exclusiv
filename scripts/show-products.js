window.onload = function(){
    var productData;
    fetch('data/products.json')
    .then(response => response.json())
    .then(data => {
        productData = data;

        var productList = document.getElementById('product-list');
        
        for(i = 0;i<productData.length;i++){
            // ADDING PRODUCT ITEM ARTICLE
           var productItem = document.createElement("article");
           productItem.classList.add("product-item");

           // ADDING PRODUCT IMAGE
           var productImage = document.createElement("img");
           productImage.classList.add("product-image");
           productImage.src = productData[i].path;
           productImage.alt = '';

           // ADDING PRODUCT DESCRIPTION
           var productDescription = document.createElement("div");
           productDescription.classList.add('product-description');
           productDescription.textContent = productData[i].description;

           // ADDING PRODUCT PRICE
           var productPrice = document.createElement("div");
           productPrice.classList.add("product-price");
           productPrice.textContent = productData[i].price + " RON";

           // ADDING PRODUCT BUTTON
           var productButtonArea = document.createElement("aside");
           productButtonArea.classList.add("product-button");
           var productButton = document.createElement("a");
           productButton.classList.add("product-button-text");
           productButton.href = "#";
           productButton.textContent = "Contact";
           productButtonArea.appendChild(productButton);

           // ADDING PROPERTIES TO PRODUCT ITEM
           productItem.appendChild(productImage);
           productItem.appendChild(productDescription);
           productItem.appendChild(productPrice);
           productItem.appendChild(productButtonArea);

           // ADDING PRODUCT ITEM TO LIST
           productList.appendChild(productItem);
        }
    });
}