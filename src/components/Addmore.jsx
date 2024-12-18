  import React from 'react'
  import { RocketLaunchIcon, StarIcon, FingerPrintIcon } from '@heroicons/react/16/solid'


  const ListItems = ({itemMessage}) => {
      return (
          <>
              <li className="py-2">
                  <div className="flex items-center">
                      <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-700 bg-green-100 mr-3"><FingerPrintIcon className='h-4 w-4'/></span>
                      </div>
                      <div>
                          <h4 className="text-blueGray-500">
                              {itemMessage}
                          </h4>
                      </div>
                  </div>
              </li>
          </>
      )
  }

  const CompanyAims = ({title, description, listItems=[], alt}) => {
    if(alt <= 0){
      return (
          <>
              
  <section className="relative pt-12 bg-blueGray-50">
  <div className="items-center flex flex-wrap">
    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
      <img alt="..." className="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" />
    </div>
    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
      <div className="md:pr-12">
        <div className="text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-green-600 mt-8">
          <RocketLaunchIcon className='w-5 h-5' />
        </div>
        <h3 className="text-3xl font-semibold text-white">{title}</h3>
        <p className="text-white mt-4 text-lg leading-relaxed text-blueGray-500">
          {description}
        </p>
        <ul className="list-none mt-6 text-white">
          {listItems.map((item) => {
              return (
                  <ListItems itemMessage={item} />

              )
          })}
          {/* <ListItems itemMessage={'Get valuable insight from data'} />
          <ListItems itemMessage={'Produce at efficient levels'} />
          <ListItems itemMessage={''} /> */}
        </ul>
      </div>
    </div>
  </div>

  </section>
          </>
      )
      
    }else if(alt >= 1){
      return (
      <section className="relative pt-12 bg-blueGray-50">
  <div className="items-center flex flex-wrap">

    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
      <div className="md:pr-12">
        <div className="text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-green-600 mt-8">
          <RocketLaunchIcon className='w-5 h-5' />
        </div>
        <h3 className="text-3xl font-semibold text-white">{title}</h3>
        <p className="text-white mt-4 text-lg leading-relaxed text-blueGray-500">
          {description}
        </p>
        <ul className="list-none mt-6 text-white">
          {listItems.map((item) => {
              return (
                  <ListItems itemMessage={item} />

              )
          })}
          {/* <ListItems itemMessage={'Get valuable insight from data'} />
          <ListItems itemMessage={'Produce at efficient levels'} />
          <ListItems itemMessage={''} /> */}
        </ul>
      </div>
    </div>
    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
      <img alt="..." className="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" />
    </div>
  </div>

  </section>
      )
    }
  }

const Addmore = () => {
  return (
    <>
        <CompanyAims alt={0} title={'A growing company'} description={'The extension comes with three pre-built pages to help you get started faster. You can change the text and images and you\'re good to go.'} 
        listItems={['Get valuable insights from your data', 'Produce efficiently', 'Enhance your customer experience']} />
        <CompanyAims alt={1} title={'Become the best'} description={'The extension comes with three pre-built pages to help you get started faster. You can change the text and images and you\'re good to go.'} 
        listItems={['Stay Ahead of the Curve: Anticipate market trends and make informed decisions.', 
        'Transform Your Business: Revolutionize your operations and customer experiences.', 
        'Partner with the Best: Collaborate with experts who understand your data and industry.']} />







{/* <section className="relative pt-12 bg-blueGray-50">
<div className="items-center flex flex-wrap">

  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
    <div className="md:pr-12">
      <div className="text-blue-400 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white mt-8">
        <StarIcon className='w-5 h-5' />
      </div>
      <h3 className="text-3xl font-semibold">Join the best</h3>
      <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
        The extension comes with three pre-built pages to help you get
        started faster. You can change the text and images and you're
        good to go.
      </p>
      <ul className="list-none mt-6">
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fas fa-fingerprint"></i></span>
            </div>
            <div>
              <h4 className="text-blueGray-500">
                Carefully crafted components
              </h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fab fa-html5"></i></span>
            </div>
            <div>
              <h4 className="text-blueGray-500">Amazing page examples</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="far fa-paper-plane"></i></span>
            </div>
            <div>
              <h4 className="text-blueGray-500">Dynamic components</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
    <img alt="..." className="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" />
  </div>
</div>

</section> */}
    </>
  )
}

export default Addmore