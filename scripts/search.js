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

function handleKeyPress(event) {
  displayWithFilters();
}

function returnData(){
  return fetch('data/products.json')
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

function filterDataPriceAscending(data){
  data.sort(function(a, b){
    return a.price - b.price;
  });
}

function filterDataPriceDescending(data){
  data.sort(function(a, b){
    return b.price - a.price;
  });
}

function applyFilters(data){
  var filter = document.getElementById("products-filters");

  switch(filter.value){
    case "none":
      break;
    case "price-ascending":
      filterDataPriceAscending(data);
      break;
    case "price-descending":
      filterDataPriceDescending(data);
      break;
  }
}

function displayWithFilters(){
  returnData()
  .then(data =>{
    applyFilters(data);
    search(data);
  });
}

function containsInDescription(description, filter){
  if(description.toUpperCase().indexOf(filter) > -1){
    return true;
  }
  return false;
}

function containsInTags(tags, tagcount, filter){
  for(i = 0;i<tagcount;i++){
    if(tags[i].toUpperCase().indexOf(filter) > -1){
      return true;
    }
  }
  return false;
}

function search(data){
  var input, filter, list, product, nomatches, i;
  input = document.getElementById('search-input');
  filter = input.value.toUpperCase();
  list = document.getElementById("product-list");
  nomatches = document.getElementById("no-matches");

  while(list.firstChild){
    list.removeChild(list.firstChild);
  }

  var count = 0;
  for(i = 0;i<data.length;i++){
    var tagcount = 0;
    while(data[i].tags[tagcount]){
      tagcount++;
    }

    var products = [];
    if(containsInDescription(data[i].description, filter) || containsInTags(data[i].tags, tagcount, filter)){
      list.appendChild(createProduct(data[i]));
      count = count + 1;
    }
  }
    
  if(count == 0){
     list.classList.add('change-product-list');
    nomatches.classList.add('change-no-matches');
  } 
  else{
     list.classList.remove('change-product-list');
     nomatches.classList.remove('change-no-matches');
  }
}
