import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'

const CardFullDetail = () => {
  const [FullDatail, setFullDatail] = useState(null)
  const navigate = useNavigate()
  const { slug } = useParams()
  async function getFullDatil() {
    const response = await fetch(`https://dummyjson.com/products/${slug}`)
    const data = await response.json()
    setFullDatail(data)
  }
  useEffect(() => {
    getFullDatil()
  }, [slug])

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-[#004047]'>
      <div>
        <button className='text-[18px] hover:opacity-60 mb-4' onClick={() => navigate('/')}>back</button>
        <div className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl hover:bg-gray-100">
          <img className="object-cover w-[600px] h-[500px] rounded-t-lg  md:rounded-none md:rounded-l-lg" src={FullDatail?.images[1]} alt="Image" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{FullDatail?.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{FullDatail?.description}</p>
              <div className='flex items-center justify-between mt-4'>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${FullDatail?.price}</p>
                <div className='flex gap-4 '>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{FullDatail?.rating}</p>
                  <ReactStars value={FullDatail?.rating} edit={false} size={20} />
                </div>
              </div>
            </div>
          </div >
        </div>
      </div>
    </div>
  )
}

export default CardFullDetail