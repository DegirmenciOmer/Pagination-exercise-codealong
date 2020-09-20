function createAndAppend(name, parent, options = {}) {//source: hyf earlier javascript3 homework
  const elem = document.createElement(name);
  parent.appendChild(elem);
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'text') {
      elem.innerHTML = value;
    } else {
      elem.setAttribute(key, value);
    }
  });
  return elem;
}

const listOfItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12',
    'Item 13',
    'Item 14',
    'Item 15',
    'Item 16',
    'Item 17',
    'Item 18',
    'Item 19',
    'Item 20',
    'Item 22',
    'Item 23',
    'Item 24',
];
const listElement = document.getElementById('list');
const paginationElement = document.getElementById('pagination');
console.log(listElement);

let currentPage = 1;
let rows = 5;

function displayList(items, wrapper, rowsPerPage, page) {
    wrapper.innerHTML = '';
    page--;

    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginatedItems = items.slice(start, end);

    console.log(paginatedItems);
    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];
        let itemElement = document.createElement('div');
        itemElement.classList = 'item';
        itemElement.innerText = item;

        wrapper.appendChild(itemElement);

    }
}

function setupPagination(items, wrapper, rowsPerPage) {
    wrapper.innerHTML = '';
    let pageCount = Math.ceil(items.length / rowsPerPage);
    for (let i = 1; i < pageCount + 1; i++) {
        let btn = paginationBtn(i, items);
        wrapper.appendChild(btn);
        paginationBtn(i, items);
    }
}

function paginationBtn(page, items) {
    let button = document.createElement('button');
    button.innerText = page;
    if (currentPage == page) button.classList.add('active');
    button.addEventListener('click', function () {
        currentPage = page; 
        displayList(items, listElement, rows, currentPage);

        let currentBtn = document.querySelector('.pagenumbers button.active');
        currentBtn.classList.remove('active');
        this.classList.add('active')
    })
    return button;
}

displayList(listOfItems, listElement, rows, currentPage)
setupPagination(listOfItems, paginationElement, rows);