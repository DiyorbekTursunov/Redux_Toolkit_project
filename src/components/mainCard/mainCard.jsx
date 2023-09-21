import MainCardDetail from './mainCardDetail';
import DataCatigory from '../catigory/dataCatigory';

const MainCard = () => {
 

  return (
    <>
      <div className='w-full  mx-auto pb-[170px]'>
        <DataCatigory />
      </div>
      <div className='max-w-[1110px] mx-auto px-5 pb-[100px]'>
        <MainCardDetail />
      </div>
    </>
  )
}

export default MainCard