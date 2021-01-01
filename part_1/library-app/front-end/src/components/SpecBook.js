import React, from 'react'
import  axios  from 'axios';


const SpecBook = () => {
    const [book,setBook]=useState()
    const specfic_book =()=>{
        axios.get('/books/:book_id')
            .then(response) {setBook(response.data)
            .catch(err) =()=>{throw err}
    }
    return (
        <div>
            <div >{book}</div>
        </div>
    )
}

export default SpecBook
