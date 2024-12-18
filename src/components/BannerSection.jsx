import React from 'react'
import { StarIcon, FireIcon, ShieldCheckIcon, ArrowRightCircleIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';
const BannerSection = () => {
  return (
    <>
        
<section class="relative  bg-blueGray-50 mt-36">
<div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br to-green-500 from-40% via-gray-500 via-10% from-gray-300 uppercase"
            >Your story starts with us</h1>
                <p class="mt-4 text-lg text-blueGray-200 text-white">
                  We're here to help you  make meaningful insights from your data
                  <Link to={'/about'} className='block font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br to-green-500 from-40% via-gray-500 via-10% from-gray-300 uppercase' >Learn more <ArrowRightCircleIcon className='w-5 h-5 text-green-400 inline-block' /> </Link>
                </p>

              </div>
            </div>
          </div>
        </div>
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-10 bg-blueGray-200 -mt-24 z-0">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-600">
                    <StarIcon className='w-5 h-5' />
                  </div>
                  <h6 class="text-xl font-semibold">Unparalleled Excellence</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                  Delivering cutting-edge solutions for smarter, data-driven decisions to make you thrive in the mordern world of business
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-700">
                    <ShieldCheckIcon className='w-5 h-5'/>
                  </div>
                  <h6 class="text-xl font-semibold">Trusted by industry leaders</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Securing your data while empowering impactful strategies and redusing risks
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-600">
                    <FireIcon className='w-5 h-5' />
                  </div>
                  <h6 class="text-xl font-semibold">Igniting growth</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Fueling businesses with transformative insights that drive success.
                  </p>
                </div>
              </div>
            </div>
          </div>
</div>
      </section>
      </section>
    </>
  )
}

export default BannerSection
