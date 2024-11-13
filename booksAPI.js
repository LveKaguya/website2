document.addEventListener("DOMContentLoaded", function() {
    fetchBooks('programming'); // Example search term for programming books
});

function fetchBooks(searchTerm) {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=10`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayBooks(data.items); // 'items' contains the array of books
        })
        .catch(error => console.error('Error fetching books:', error));
}

function displayBooks(books) {
    const booksContainer = document.getElementById('booksContainer');
    booksContainer.innerHTML = ''; // Clear existing content

    books.forEach(book => {
        const bookInfo = book.volumeInfo;
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        bookItem.innerHTML = `
            <img src="${bookInfo.imageLinks?.thumbnail || 'default-cover.jpg'}" alt="${bookInfo.title} Cover" class="book-cover">
            <div class="book-info">
                <h3>${bookInfo.title}</h3>
                <p><strong>Author:</strong> ${bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown'}</p>
                <p class="book-description">${bookInfo.description ? bookInfo.description.slice(0, 100) + '...' : 'No description available.'}</p>
                <a href="${bookInfo.infoLink}" target="_blank" class="buy-button">More Info</a>
            </div>
        `;

        booksContainer.appendChild(bookItem);
    });
}
