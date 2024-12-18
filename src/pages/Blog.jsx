import React from 'react'
import ai from '../assets/images/ai.jpg';
import business from '../assets/images/business.jpg'
import startups from '../assets/images/startups.jpg'
const ArticleCover = () => {
    const blogs = [
        {imgSrc: ai, date: 'Dec 22, 2027', title: 'The Zygen\'s latest AI assistant, the best AI management tool for business', frontline: 'Meet the Zygen Ai, the worlds best Ai in the business world'},
        {imgSrc: business, date: 'Dec 22, 2029', title: 'Zygen generated over 2 billion data points from approximatelly 330k organisations', frontline: 'Zygen edge cutting data collection tools'},
        {imgSrc: startups, date: 'Dec 22, 2023', title: 'Startups increases their revenue by over 140% using Zygen technologies', frontline: 'Zygen enables startups to increase their gross revenue...'},
    ]
    return (
        <>
            {
                blogs.map((blog, index) => {
                    return (
                        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3" key={index}>
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <img
              src={blog.imgSrc}
              alt="image"
              className="w-full"
            />
          </div>
          <div classNameName='text-white'>
            <span
              className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
            >
              {blog.date}
            </span>
            <h3>
              <a
                className="text-dark text-white hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {blog.title}
              </a>
            </h3>
            <p className="text-body-color text-base text-gray-300">
              {blog.frontline}
            </p>
          </div>
        </div>
      </div>
                        </>
                    )
                })
            }
        </>
    )
}

const Blog = () => {
  return (
    <>
    <h1 className='text-5xl mt-2 font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br to-green-500 from-40% via-gray-500 via-10% from-gray-300 uppercase 
    text-center'>Our latest blog</h1>
        {/* <!-- ====== Blog Section Start --> */}
<section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap">

    <ArticleCover />
      
    </div>
  </div>
</section>
{/* <!-- ====== Blog Section End --> */}
    </>
  )
}

export default Blog