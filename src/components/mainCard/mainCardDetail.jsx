import React, { useEffect } from 'react'
import MainCardItem from './mainCardItem'
import { useDispatch, useSelector } from 'react-redux';
import { getDataFail, getDataStart, getDataSucsess } from '../../redux/cardDataSlice';

const MainCardDetail = () => {
    const { cards , isLoading } = useSelector(state => state.cardData)
    const { catigory } = useSelector(state => state.catigory)
    const dispatch = useDispatch()

    const getCatigoryHandel = () => {
        try {
            async function getData() {
                dispatch(getDataStart())
                const response = await fetch(`https://dummyjson.com/products/category/${catigory}`)
                const data = await response.json()
                dispatch(getDataSucsess(data))
            }
            getData()
        } catch (error) {
            dispatch(getDataFail(error))
        }
    }
    useEffect(() => {
        getCatigoryHandel()
    }, [catigory])
    return (
        <div className='grid grid-cols-3 gap-[20px]'>
            {isLoading && <h1 className='text-[24px]'>loading...</h1>}
            {cards && cards.map(item => (
                <MainCardItem {...item} key={item.id} />
            ))}
        </div>
    )
}

export default MainCardDetail