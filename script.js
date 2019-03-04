let api = 'https://www.googleapis.com/books/v1/volumes?q=';
let items;
let searchInput = document.getElementById('searchInput');
let searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', displayResults);

async function displayResults (event){
  event.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.open('GET', api + searchInput.value + '&maxResults=40');
  xhr.send();
  xhr.onload = function(){
    items = JSON.parse(xhr.responseText).items;
    for (let item of items){
      // if (!item.volumeInfo.imageLinks){
      //   item.volumeInfo.imageLinks.thumbnail = './nothumbnail.png'
      // }
     let newBook = {
       imgUrl: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : './no_image_available.jpeg',
       title: item.volumeInfo.title,
       authors: item.volumeInfo.authors,
       publisher: item.volumeInfo.publisher,
       link: item.volumeInfo.infoLink
     }
     makeCard(newBook);
   }
  }
}


function nodeMaker ({nodeType, nodeClasses, textContent, nodeAttributes, nodeParent}){
  let newNode = document.createElement(nodeType);
  if (nodeClasses){
    for (let element of nodeClasses){
      newNode.classList.add(element);
    }
  }
  if (textContent){
    newNode.textContent = textContent;
  }
  if (nodeAttributes){
    for (let attribute in nodeAttributes){
      newNode.setAttribute(attribute, nodeAttributes[attribute]);
    }
  }
  nodeParent.append(newNode);
  return newNode;
}

function makeCard({imgUrl, title, authors, publisher, link}){
  let cardContainer = nodeMaker({
    nodeType: 'div',
    nodeClasses: ['col-xs-6','col-sm-4','col-md-3','col-lg-2', 'mb-3'],
    nodeParent: document.getElementById('results')
  })

  let cardElement1 = nodeMaker({
    nodeType: 'div', 
    nodeClasses: ['card'], 
    nodeParent: cardContainer
  })

  //Card image
  let cardElement11 = nodeMaker ({
    nodeType: 'div',
    nodeClasses: ['view', 'overlay'],
    nodeParent: cardElement1
  })

  let cardElement111 = nodeMaker({
    nodeType: 'img',
    nodeClasses: ['card-img-top'],
    nodeAttributes: {src: imgUrl},
    nodeParent: cardElement11
  })
  
  let cardElement112 = nodeMaker({
    nodeType: 'a', 
    nodeAttributes: {href: '#!'},
    nodeParent: cardElement11
  })
  
  let cardElement1121 = nodeMaker({
    nodeType: 'div',
    nodeClasses: ['mask', 'rgba-white-slight'],
    nodeParent: cardElement112
  })
  
  //Card content
  let cardElement12 = nodeMaker({
    nodeType: 'div',
    nodeClasses: ['card-body', 'p-2','pt-4'],
    nodeParent: cardElement1
  })

  let cardElement121 = nodeMaker({
    nodeType: 'h6',
    nodeClasses: ['card-title', 'm-0'],
    textContent: title,
    nodeParent: cardElement12
  })

  let cardElement122 = nodeMaker({
    nodeType: 'hr', 
    nodeClasses: ['m-0'],
    nodeParent: cardElement12
  })

  let cardElement123 = nodeMaker({
    nodeType: 'h7',
    nodeClasses: ['card-text', 'm-0', 'font-weight-bolder'],
    textContent: authors,
    nodeParent: cardElement12
  })

  let cardElement124 = nodeMaker({
    nodeType: 'p',
    nodeClasses: ['card-text', 'm-0', 'mt-1'],
    textContent: publisher,
    nodeParent: cardElement12
  })

  let cardElement125 = nodeMaker({
    nodeType: 'a',
    nodeClasses: ['btn', 'btn-unique', 'mx-0'],
    nodeAttributes: {href: link, target: '_blank'},
    textContent: 'More',
    nodeParent: cardElement12
  })

  // let cardElement1251 = nodeMaker({
  //   nodeType: 'h7',
  //   textContent: 'More details ',
  //   nodeParent: cardElement125
  // });

  // let cardElement12511 = nodeMaker({
  //   nodeType: 'i',
  //   nodeClasses: ['fas', 'fa-angle-double-right'],
  //   nodeParent: cardElement1251
  // });
  
  let something;
  
}
// makeCard("http://books.google.com/books/content?id=j1G-DAZmVbkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", 'El Lenguaje del Cuerpo', 'Allan Pease', 'Editorial AMAT');