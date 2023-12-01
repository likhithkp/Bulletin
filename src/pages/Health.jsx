import React, { useEffect, useState, useContext } from 'react'
import { NewsApiContext } from '../context/Api'

const Health = () => {
  const {newsCategory} = useContext(NewsApiContext);
  const [healthData, setHealthData] = useState([])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  useEffect(() => {
    const fetchBeautyData= async() => {
      try{
        const beautyResultData = await newsCategory('health')
        setHealthData(beautyResultData)
      }catch(err){
        console.log(err)
      }
    }
    fetchBeautyData()
  }, [newsCategory])

  return (
    <div className='flex items-center justify-center mt-[3rem] h-full'>
      <div className='grid grid-cols-3 gap-6 max-w-6xl'>
        {healthData.map((news, index) => {
          return (
            <div className='w-[360px] min-h-[400px] flex flex-col items-start gap-3 border border-black-100 rounded-md overflow-hidden cursor-pointer box-bg-[#d4ecff] hover:shadow-lg hover:bg-[#f9fdff] hover:-translate-y-2 transition-all' key={index}>
              <a href={news?.url} target="_blank" rel="noopener noreferrer">   
              <img className='object-cover h-[180px] w-full' src={news?.urlToImage} alt={news.title}/>
              <div className='flex flex-col items-start gap-3 p-3'>
                <h2 className='text-lg font-bold text-[#1b456c]'>{news?.title}</h2>
                <div className='flex gap-4'>
                  <p className='text-sm'>{news?.source.name}</p>
                  <p className='text-sm'>{formatDate(news?.publishedAt)}</p>
                </div>
                <p className=' text-base text-[#577592]'>{news?.description}</p>
              </div>
              </a>
            </div>
          );
        })}
       
      </div>
    </div>
  )
}

export default Health