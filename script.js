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
 console.log(listElement);

 let currentPage = 4;
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

 displayList(listOfItems, listElement, rows, currentPage)