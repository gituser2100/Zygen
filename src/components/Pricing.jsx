import React from 'react'
import { LightBulbIcon } from '@heroicons/react/16/solid';

const OfferDetails = ({offer}) => {
    return (
        <>
        <div className='mb-1'>
            <li class="leading-tight"><LightBulbIcon className='h-3 w-3 inline text-green-600 mr-1' />{offer}</li>

        </div>

        </>
    )
}

const PriceCard = ({offerType, price, offerDetails=[]}) => {
    return (
        <>
            <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-2 rounded-md shadow-lg shadow-green-700 md:flex md:flex-col">
                    <div class="w-full flex-grow">
                        <h2 class="text-center font-bold uppercase mb-4">{offerType}</h2>
                        <h3 class="text-center font-bold text-4xl mb-5">${price}<span class="text-sm">/mo</span></h3>
                        <ul class="text-sm mb-8">
                            {offerDetails.map((offer) => {
                                return(
                                    <OfferDetails offer={offer}  />
                                )
                            })}
                        </ul>
                    </div>
                    <div class="w-full">
                        <button class="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">Buy Now</button>
                    </div>
                </div>
        </>
    )
}

const ProPriceCard = ({offerType, price, offerDetails}) => {
    return (
        <>
            <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-green-600 md:relative md:z-50 md:flex md:flex-col">
                    <div class="w-full flex-grow">
                        <h2 class="text-center font-bold uppercase mb-4 text-green-700">{offerType}</h2>
                        <h3 class="text-center font-bold text-4xl md:text-5xl mb-5 text-green-600">${price}<span class="text-sm">/mo</span></h3>
                        <ul class="text-sm mb-8">
                        {offerDetails.map((offer) => {
                                return(
                                    <OfferDetails offer={offer}  />
                                )
                            })}
                        </ul>
                    </div>
                    <div class="w-full">
                        <button class="font-bold bg-green-600 hover:bg-green-900 text-white rounded-md px-10 py-2 transition-colors w-full">Buy Now</button>
                    </div>
                </div>
        </>
    )
}

const Pricing = () => {
  return (
    <>
        <div class="min-w-screen min-h-screen bg-gray-900 px-5 py-5">

<div class="w-full mx-auto bg-black px-5 py-10 text-gray-600 mb-10">
    <div class="max-w-5xl mx-auto md:flex">
        <div class="md:w-1/4 md:flex md:flex-col">
            <div class="text-left w-full flex-grow md:pr-5">
                <h1 class="text-4xl font-bold mb-5 text-green-500">Pricing</h1>
                <h3 class="text-md font-medium mb-5 text-green-700">Consider which plan will be suitable for your organization. Pricing and items offered are subject to change</h3>
            </div>
        </div>
        <div class="md:w-3/4">
            <div class="max-w-4xl mx-auto md:flex">
                <PriceCard offerType={'Starter'} price={100} offerDetails={['Access to premium features', 'Proccess upto 3000 user data', 'Weekly reports']} />
                <ProPriceCard offerType={'Pro'} price={700} offerDetails={['Everything in standard pack', 'Unlimited user data proccessing', 'Daily reports']} />
                <PriceCard offerType={'Standard'} price={200} offerDetails={['Access to premium features','Everything in starter pack', 'Proccess upto 7000 user data']} />

            </div>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default Pricing