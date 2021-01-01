import React,{useEffect} from 'react'
import  axios  from 'axios';


const Books = () => {
    const [books,setBooks]=useState([])

    const booksList=()=>{
        axios.get("/books")
            .then(response){setBooks(response)}
    }

    const deleteBook =()=>{
        axios.delete('/books/:book_id')
    }

    useEffect(() => {
        booksList()
      });
    return (
        <div>
            {books.map(i,e)=>{
                <div>
                    {books.e}
                <button onClick{()=>deleteBook()}>delete</button>
                </div>
            }}
        </div>
    )
}

export default Books
