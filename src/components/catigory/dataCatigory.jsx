import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCatigory } from '../../redux/CartigorySlice'

const DataCatigory = () => {
    const [catigors, setcatigors] = useState(null)
    const dispatch = useDispatch()
    const getCatigoryHandel = () => {
        try {
            async function getData() {
                const response = await fetch('https://dummyjson.com/products/categories')
                const data = await response.json()
                setcatigors(data)
            }
            getData()
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCatigoryHandel()
    }, [])
  return (
    <div className='text-white flex lg:gap-[20px] mb-3 md:gap-[5px] overflow-x-scroll kategory-scroll pb-2 mx-10 px-10'>
        {catigors && catigors.map((item , i) => (
            <button onClick={() => dispatch(getCatigory(item))} className='py-[8px] whitespace-nowrap px-[12px] rounded-[32px] border-[2px] border-[#303030] hover:opacity-70 cursor-pointer' key={i}><span>{item}</span></button>
        ))}
    </div>
  )
}

export default DataCatigory