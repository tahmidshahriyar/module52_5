import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import RighAside from '../components/homelayout/RighAside'
import NewsDetailsCard from '../components/NewsDetailsCard'
import { useLoaderData, useParams } from 'react-router'

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news,setNews] = useState({})
    console.log(data ,id);
    useEffect(()=>{
        const newsDetails=data.find(signleNews=>signleNews.id == id);
        setNews(newsDetails)
    },[data,id,news])
  return (
    <div>
        <header className='py-3'>
            <Header></Header>
        </header>
        <main className='w-11/12 mx-auto grid grid-cols-12 gap-3 py-5 '>
        <section className='col-span-9'>
            <h2 className='font-bold mb-4'>News Details</h2>
            <NewsDetailsCard news={news}></NewsDetailsCard>

        </section>
       <aside className='col-span-3'>
                <RighAside></RighAside>
            </aside>

        </main>
    </div>
  )
}

export default NewsDetails