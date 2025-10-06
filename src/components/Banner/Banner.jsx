import React from 'react'
import bookImg from '../../assets/bookImg.png'

const Banner = () => {
    return (

        <div className="hero bg-base-200 rounded-4xl ">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 px-3 md:px-25 ">
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold md:mr-10">Books to freshen up your bookshelf</h1>

                    <button className="btn btn-primary border-none shadow-none bg-[#23BE0A] mt-4 md:mt-10">View The List</button>
                </div>
                <img
                    src={bookImg}
                    className="max-w-6/12 md:max-w-7/12 rounded-lg md:ml-10" />
            </div>
        </div>

    )
}

export default Banner
