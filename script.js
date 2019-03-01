let api = 'https://www.googleapis.com/books/v1/volumes?q=';
let jsonResponse;
let books;
let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', loadJson);

function loadJson (event){
  event.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.open('GET', api + searchInput.value);
  xhr.send();
  xhr.onload = function(){
    books = JSON.parse(xhr.responseText).items;
  }
}

// let books = jsonResponse.items;

// for (let i = 0; i <)