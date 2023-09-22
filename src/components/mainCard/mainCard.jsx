import MainCardDetail from './mainCardDetail';
import DataCatigory from '../catigory/dataCatigory';

const MainCard = () => {


  return (
    <>
      <div className='w-full  mx-auto pb-[170px]'>
      </div>
      <div className='max-w-[1110px] flex gap-3 mx-auto px-5 pb-[100px]'>
        <div className='bg-[#135158] py-5'>
          <DataCatigory />
        </div>
        <MainCardDetail />
      </div>
    </>
  )
}

export default MainCard