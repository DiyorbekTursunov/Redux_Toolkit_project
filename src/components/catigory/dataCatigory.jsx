import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCatigory } from '../../redux/CartigorySlice'

const DataCatigory = () => {
    const [catigors, setcatigors] = useState(null)
    const { catigory } = useSelector(state => state.catigory)
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
    <div className='text-white flex flex-col lg:gap-[20px] mb-3 md:gap-[5px] items-start pb-2 mx-10 px-10'>
        {catigors && catigors.map((item , i) => (
            <button onClick={() => dispatch(getCatigory(item))} className={`py-[8px] whitespace-nowrap px-[12px] rounded-[32px] border-[2px] border-[#303030] hover:opacity-70 cursor-pointer ${item == catigory ? '' : 'bg-slate-800'}`} key={i}><span>{item}</span></button>
        ))}
    </div>
  )
}

export default DataCatigory