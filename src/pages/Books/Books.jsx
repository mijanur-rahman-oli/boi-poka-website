import React, { Suspense, useEffect, useState } from 'react'
import Book from '../Book/Book'

const Books = ({ data }) => {
    // const [allBooks, setAllBooks] = useState([])

    // useEffect(() => {
    //     fetch("booksData.json")
    //     .then(res=>res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // }, [])


    return (
        <div>
            <h2 className='max-w-[1440px] mx-auto text-2xl md:text-3xl font-bold text-center mt-20 pb-6'>Books</h2>
            <Suspense fallback={<span>loading...</span>}>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 px-8 md:px-0 '>
                    {

                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)

                    }

                </div>
            </Suspense >

        </div>

    )

}

export default Books