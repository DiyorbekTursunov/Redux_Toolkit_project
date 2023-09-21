import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'

const MainCardItem = ({ category, price, thumbnail, title, rating , id}) => {
    return (
        <Link to={`/item/${id}`}>
            <div className="w-full h-[500px] max-w-sm bg-[#16616a] rounded-lg shadow ">
                <img className="p-8 rounded-t-lg w-full h-[300px] object-cover " src={thumbnail} alt="product image" />
                <div className="px-5 pb-5">
                    <div>
                        <h5 className="text-sm font-semibold tracking-tight text-white">{category}</h5>
                        <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
                    </div>
                    <div className="flex items-center mt-2.5 mb-5">
                        <ReactStars value={rating} edit={false} size={20} />
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-white">${price}</span>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">view full detail</a>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MainCardItem