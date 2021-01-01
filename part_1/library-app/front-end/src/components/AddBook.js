import React from 'react';
import axios from "axios";

const AddBook = () => {
    const add_book = (title, author, pages, publisher, published_at) => {
        axios.post("/books", (title, author, pages, publisher, published_at))
            .then(response)
            .catch(err) = () => { throw err }
    }
    return (
        <div>
            <button onClick={() => { add_book(title, author, pages, publisher, published_at) }}>submit</button>
        </div>
    )
}

export default AddBook
