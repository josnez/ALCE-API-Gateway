const { RESTDataSource } = require('apollo-datasource-rest')
const serverConfig       = require('../server')

class BookAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.BookAPIurl;
    }

    async bookById(id){
        return await this.get(`/book/${id}/`)
    }
    
    async bookByIdOwner(idOwner){
        return await this.get(`/books/${idOwner}/`)
    }

    async allBooks(book){
        return await this.get(`/books`, book);
    }

    async booksByAvailabilityTittle(tittle){
        return await this.get(`/books/getAllBooksAvailable/${tittle}/`);
    }

    async booksByAvailabilityGenre(genre){
        return await this.get(`/books/getAllBooksAvailable/${genre}/`);
    }

    async booksByAvailabilityEditorial(editorial){
        return await this.get(`/books/getAllBooksAvailable/${editorial}/`);
    }

    async booksByAvailabilityAuthor(author){
        return await this.get(`/books/getAllBooksAvailable/${author}/`);
    }

    async createBook(book){
        book = new Object(JSON.parse(JSON.stringify(book)));
        return await this.post(`/book`, book);
    }

    async updateBook(id){
        return await this.put(`/book/${id}`, id);
    }

    async deleteBook(id){
        return await this.delete(`/book/{id}`, id);
    }
    
    async requestedBooksbyIdApplicant(idAplicant){
        return await this.get(`/books/getAllBooksAvailable/${idAplicant}/`);
    }
}
    module.exports = BookAPI