import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {

    const { bookName, author, image, category, rating, tags, yearOfPublishing, bookId } = singleBook


    return (

        <Link to={`/bookDetails/${bookId}`}>

            <div className="card bg-base-100 w-96 shadow-md p-6 border-1 border-gray-300 rounded-xl">
                <figure className='p-4 bg-gray-200 w-3/4 mx-auto'>
                    <img src={image} alt="books" className='h-[166px]' />
                </figure>

                <div className="card-body">
                    <div className='flex justify-center gap-6 items-center text-green-500 '>
                        {
                            tags.map((tag) => <button className='bg-gray-100 rounded-lg p-1.5'>{tag}</button>)
                        }
                    </div>

                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>



                    <h3 className='text-gray-600 text-16px font-semibold'>{author}</h3>
                    <div className="card-actions flex justify-between border-t-1 border-dashed border-gray-500 mt-4">
                        <div className="badge ">{category}</div>
                        <div className="badge">{rating}<FaStarHalfAlt /></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Book
