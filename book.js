
//searching book
const searchBook = () =>
{
    const searchField = document.getElementById('search-field');
    let searchText = searchField.value;

    console.log(searchText);
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs));

}


//display book
const displayBook = books =>
{
    console.log(books);

    const searchResult = document.getElementById('search-result');
    const searchResultAll = document.getElementById('searchresultAmount');

    // clear previous data
     searchResult.innerHTML = '';
    
    books.forEach(book =>
    {
       // console.log(book);
         
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =
            `<div class="card">
                 <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                 <div class="card-body">
                   <h5 class="card-title">${book.title}</h5>
                   <p>Author Name :${book.author_name}</p>
                   <p>Publisher :${book.publisher}</p>
                   <p>First publisherd :${book.publish_year[0]}</p>
                 </div>
             </div>
             `;
        
         searchResult.appendChild(div);
    });


    console.log('Search result :', + books.length);
    if (books.length === 0)
    {
        searchResultAll.innerHTML = `<h2>No result found</h2>`;
    }
    else
    {
        searchResultAll.innerHTML = `<h2>Search result : ${books.length}</h2>`;
    }
   
   
}






// requrements 

//body=>
// book name  
// author name
// publisher
// first publishing year : publish_year[0]

//bottom=>
// 1. how many result found in bottom
// 2. no result found
