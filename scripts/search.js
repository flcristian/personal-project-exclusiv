function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("product-list");
    li = ul.getElementsByTagName('article');
    nomatches = document.getElementById("no-matches");
  
    
    var count = 0;
    for (i = 0; i < li.length; i++) {
      p = li[i].getElementsByTagName("div")[0];
      txtValue = p.textContent || p.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        count = count + 1;
      } else {
        li[i].style.display = "none";
      }
    }
    if(count == 0){
      ul.classList.add('change-product-list');
      nomatches.classList.add('change-no-matches');
    } else{
      ul.classList.remove('change-product-list');
      nomatches.classList.remove('change-no-matches');
    }
}
