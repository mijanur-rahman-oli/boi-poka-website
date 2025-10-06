import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addStoredDB } from '../Utility/addToDB'

const BookDetails = () => {
    const { id } = useParams()
    const bookId = parseInt(id)
    const data = useLoaderData()

    const singleBook = data.find(book => book.bookId === bookId);
    const { image, author, bookName, review, totalPages, publisher, yearOfPublishing, rating } = singleBook


    const handleMarkAsAdded = (id) => {

        addStoredDB(id)

    }


    return (
        <div className='w-11/12 mx-auto gap-20 grid grid-cols-1 px-4 md:px-0 md:grid-cols-12 pt-6 pb-16'>

            <figure className='w-[450px] h-[500px] bg-gray-200 flex items-center justify-center rounded-lg col-span-5'>
                <img src={image} alt="" className='w-60' />
            </figure>

            <div className='col-span-6'>
                <h2 className='text-2xl font-bold border-b border-dashed border-gray-400 pb-4'>{bookName}</h2>
                <h2 className='text-gray-500 text-lg font-semibold pt-2'>By : {author}</h2>
                <p className='text-md mt-4 text-gray-700'><span className='font-semibold text-black'>Review:</span> {review}</p>

                <div className="border-t border-dashed border-gray-400 my-6 mt-4 space-y-2">

                    <div className="flex mt-6">
                        <span className=" text-gray-600 w-44">Number of Pages:</span>
                        <span className='font-semibold'>{totalPages}</span>
                    </div>

                    <div className="flex">
                        <span className=" text-gray-600  w-44">Publisher:</span>
                        <span className='font-semibold'>{publisher}</span>
                    </div>

                    <div className="flex">
                        <span className=" text-gray-600  w-44">Year of Publishing:</span>
                        <span className='font-semibold'>{yearOfPublishing}</span>
                    </div>

                    <div className="flex">
                        <span className=" text-gray-600  w-44">Ratings:</span>
                        <span className='font-semibold'>{rating}</span>
                    </div>
                </div>


                <div>
                    <button onClick={() => handleMarkAsAdded(id)} className="btn border-2 border-gray-300 shadow-none mr-6 mt-4 md:mt-10 rounded-lg">Mark as Read</button>
                    <button className="btn btn-primary border-none shadow-none bg-[#50B1C9] mt-4 md:mt-10 rounded-lg">Add to Wishlist</button>
                </div>
            </div>

        </div>
    )
}

export default BookDetails
