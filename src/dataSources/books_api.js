const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class BookAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.bookApiURL;
  }

  async createBook(bookInput) {
    bookInput = new Object(JSON.parse(JSON.stringify(bookInput)));
    return await this.post("/book", bookInput);
  }

  async booksByIdOwner(userId) {
    return await this.get(`/books/${userId}`);
  }

  async bookById(id) {
    return await this.get(`/book/${id}`);
  }

  async deleteBook(bookId) {
    return await this.delete(`/book/${bookId}`);
  }

  async getAllBooks() {
    return await this.get(`/getAllBooks`);
  }

  /*  async getAllBooksTittle(tittle) {
        return await this.get(`/books/getAllBooksAvailable/${tittle}`);
    }

    async getAllBooksAuthor(author) {
        return await this.get(`/books/getAllBooksAvailable/${author}`);
    }

    async getAllBooksGenre(genre) {
        return await this.get(`/books/getAllBooksAvailable/${genre}`);
    }

    async getAllBooksEditorial(editorial) {
        return await this.get(`/books/getAllBooksAvailable/${editorial}`);
    }

    async getBooksAplicant(idAplicant) {
        return await this.get(`/books/allRequested/${idAplicant}`);
    }    
*/
    async updateBook(bookId, bookInput) {
      //bookInput = new Object(JSON.parse(JSON.stringify({ bookInput })));
      //bookInput = new Object( bookInput );

      return await this.put(`/book/${bookId}`, bookInput);
    } 
}
module.exports = BookAPI;
