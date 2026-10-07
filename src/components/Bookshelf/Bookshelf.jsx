import React from 'react'
import { useState } from 'react';


function Bookshelf() {

    const [book, setBook] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ])

    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })

    function handleInputChange(event) {
        setNewBook({ ...newBook, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()

        setBook([...book, newBook])
        setNewBook({title:'', author:''})
    }

    return (

        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input value={newBook.title} onChange={handleInputChange} id='title' type="text" name='title' />

                    <label htmlFor="author">Author: </label>
                    <input value={newBook.author} onChange={handleInputChange} id='author' type="text" name='author' />

                    <button>Create Book</button>
                </form>
            </div>

            <div className="bookCardsDiv">

                {book.map((oneBook)=>
                
                        <div className='bookCard' key={oneBook.title}>
                        <h3>title: {oneBook.title}</h3>
                        <h3>Author: {oneBook.author} </h3>
                        </div>
                    
                )}

            </div>

        </div>

    )
}

export default Bookshelf


const something = ()=>{return 5}