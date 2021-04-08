class Folder {
  constructor(title, books=[]) {
    this.title = title;
    this.books = books;
  };

  addBook(book) {
    this.books.push(book);
    console.log(`book ${book.title} added to folder ${this.title}`);
  };

  deleteFolder(i) {
    Main.folderArr.splice(i, 1);
    localStorage.setItem('folderArr', JSON.stringify(Main.folderArr));
    console.log(`${this.title} deleted!`);
    console.log("Main.folderArr after deleting", Main.folderArr);
    Main.buildFolderList();
    if (Main.activeFolder === this) {
      let section = document.getElementById('book-list-section');
      section.innerHTML = "";
    }
  };

  buildBookList() {
    let section = document.getElementById('book-list-section');
    let wrapper =`
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            <th scope="col">Pages</th>
            <th scope="col">Read</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody id="table-body">
          <!-- populated later -->
        </tbody>
      </table>
    `
    section.innerHTML = wrapper;
  
    let tableBody = document.getElementById('table-body');
  
    for (let i in this.books) {
      console.log(this.books[i].title)
      let book = this.books[i];
      let item = `
        <tr>
          <td>
            ${book.title}
          </td>
          <td>
            ${book.author}
          </td>
          <td>
            ${book.genre}
          </td>
          <td>
            ${book.pages}
          </td>
          <td>
            <!-- add checkbox -->
            ${book.read}
          </td>
          <td>
            <button class='btn btn-sm btn-outline-dark delete-book'>Delete</button>
          </td>
          <td>
            <button class='btn btn-sm btn-outline-dark edit-book'>Edit</button>
          </td>
        </tr>
      `
  
      tableBody.innerHTML += item;


    }
    for (let i in this.books) {
      let deleteBookBtn = document.getElementsByClassName('delete-book');
      deleteBookBtn[i].addEventListener('click', () => {this.books.splice(i, 1); this.buildBookList();});
    }
  };

  viewFolderItems() {

    Main.activeFolder = this;
  
    console.log(`${this.title} showing items!`);
  
    let section = document.getElementById('book-add')
    let placeholder = `Add book title to '${this.title}'`;
  
    
    let wrapper = `
      <div id="book-container">
      <div id="form-wrapper">
          <form id="form">
              <div id="flex-wrapper">
                  <div id="book-title-area">
                      <input id="book-title" class="form-control" type="text" name="title" placeholder="${placeholder}">
                  </div>
                  <div id="book-author-area">
                      <input id="book-author" class="form-control" type="text" name="author" placeholder="Author">
                  </div>
                  <div id="book-genre-area">
                      <input id="book-genre" class="form-control" type="text" name="genre" placeholder="Genre">
                  </div>
                  <div id="book-pages-area">
                      <input id="book-pages" class="form-control" type="text" name="pages" placeholder="Pages">
                  </div>
                  <div id="book-checkbox-area">
                    <input id="book-checkbox" class="checkbox" type="checkbox">
                  </div>
                  <div id="book-submit-area">
                      <input id="book-submit" class="btn" type="submit" >
                  </div>
              </div>
          </form>
      </div>
  
      <div id="list-wrapper">
      
      </div>	
      </div>
    ` 
    section.innerHTML = wrapper;
  
    let checkbox = document.getElementById('book-checkbox');
    let wasRead = checkbox.checked;
    checkbox.addEventListener('click', function() {
      wasRead = checkbox.checked;
      console.log(`${wasRead} after addeventlistener`);
  
    })
  
    document.getElementById('form-wrapper').addEventListener('submit', (e) => {
      e.preventDefault();
  
      let title = document.getElementById('book-title').value
      document.getElementById('book-title').value = ''
  
      let author = document.getElementById('book-author').value
      document.getElementById('book-author').value = ''
  
      let genre = document.getElementById('book-genre').value
      document.getElementById('book-genre').value = ''
  
      let pages = document.getElementById('book-pages').value
      document.getElementById('book-pages').value = ''
  
      let book = new Book(title, author, pages, genre, wasRead);
  
      this.addBook(book);
      this.buildBookList();
      
      checkbox.checked = false;
      wasRead = false;
  
    });
  
    this.buildBookList();
  };
};

class Book {
  constructor(title, author, pages, genre, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
  };
}

class Principal {
  constructor() {
    this.folderArr = JSON.parse(localStorage.getItem('folderArr'));
    this.activeFolder; 
  }
  start() {
    let folderForm = document.getElementById('folder-form');
    folderForm.addEventListener('submit', function(e) {
      e.preventDefault();
    
    
      let title = document.getElementsByClassName('folder-form-title')[0].value
      document.getElementsByClassName('folder-form-title')[0].value = ''
      console.log(`folder '${title}' submited!`);
    
      let folder = new Folder(title);
      Main.folderArr.push(folder);
      console.log("a ver folderArr: ", Main.folderArr);
      localStorage.setItem('folderArr', JSON.stringify(Main.folderArr));

      Main.buildFolderList();
    })
    console.log("***************\na ver recarga: ", Main.folderArr);
    Main.buildFolderList();
  };

  buildFolderList() {
    console.log("SHOULDN'T BE EMPTY (folderArr)", Main.folderArr);
    Main.folderArr = [];
    let localFolders = JSON.parse(localStorage.getItem('folderArr'));
    console.log("local folders: ",localFolders);
    for (let i in localFolders) {
      let folder = new Folder(localFolders[i].title, localFolders[i].books);
      Main.folderArr.push(folder);
      console.log("nuevo", Main.folderArr);
      console.log("localFolder: ", localFolders[i]);
      console.log("folder: ", this.folder);
    }
    console.log("folderArr: ", Main.folderArr, "\n*************")

    let wrapper = document.getElementById('folder-list-wrapper');
    wrapper.innerHTML = '';
  
    for (let i in Main.folderArr) {
      let item = `
        <div id='folder-row-${i}' class='folder-flex-wrapper folder-wrapper'>
          <div style='flex:7' class='folder-title'>
            ${Main.folderArr[i].title}
          </div>
          <div style='flex:1'>
            <button class='btn btn-sm btn-outline-info view-items'>View items</button>
          </div>
          <div style='flex:1'>
            <button class='btn btn-sm btn-outline-dark delete-folder'>Delete</button>
          </div>
        </div>
      `
  
      wrapper.innerHTML += item
    }
  
    for (let i in Main.folderArr) {
  
      let viewBooksBtn = document.getElementsByClassName('view-items')[i]
      let deleteFolderBtn = document.getElementsByClassName('delete-folder')[i]
  
      viewBooksBtn.addEventListener('click', () => {
        Main.folderArr[i].viewFolderItems();
      });
      deleteFolderBtn.addEventListener('click', () => {
        Main.folderArr[i].deleteFolder(i);
      });
  
    }
  
  };
}

let Main = new Principal();
Main.start();


