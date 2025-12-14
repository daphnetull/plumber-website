<template>
  <!-- Hero Slider -->
  <section class="relative">
    <Swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true" :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }" :pagination="{ clickable: true }" :navigation="true" class="services-hero-swiper">
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="relative h-96 flex items-center bg-cover bg-center"
          :style="{ backgroundImage: `url(${slide.image})` }">
          <!-- Dark overlay for better text readability -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>

          <!-- Content -->
          <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
            <div class="text-white">
              <h2 class="text-4xl md:text-5xl font-bold mb-4">{{ slide.title }}</h2>
              <p class="text-xl text-blue-100 mb-6">{{ slide.description }}</p>
              <div class="flex gap-4">
                <a :href="'tel:' + business.phone"
                  class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
                  Call Now
                </a>
                <NuxtLink to="/contact"
                  class="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
                  Schedule Service
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>


  <!-- Page Header -->
  <!-- <section class="bg-blue-900 text-white py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p class="text-xl text-blue-100">Complete plumbing solutions for your home and business</p>
        </div>
      </div>
    </section> -->

  <!-- Services Grid -->
  <section class="py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12">

        <!-- Drain Cleaning -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="p-8">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z">
                  </path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Drain Cleaning</h2>
            </div>
            <p class="text-gray-600 mb-6">Professional drain and sewer line cleaning services to keep your plumbing
              system flowing smoothly.</p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Kitchen and bathroom drain cleaning</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Main sewer line cleaning</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Hydro jetting for stubborn clogs</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Video camera inspection</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Water Heater Services -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="p-8">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                  </path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Water Heater Services</h2>
            </div>
            <p class="text-gray-600 mb-6">Complete water heater installation, repair, and maintenance for all types of
              systems.</p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Traditional tank water heater installation</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Tankless water heater systems</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Water heater repair and maintenance</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Energy-efficient upgrades</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Maintenance Services -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="p-8">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Maintenance Services</h2>
            </div>
            <p class="text-gray-600 mb-6">Regular maintenance services to prevent problems and keep your plumbing system
              running efficiently.</p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Annual plumbing inspections</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Preventive drain cleaning</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Water heater tune-ups and maintenance</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Pipe system check-ups and assessments</span>
              </li>
            </ul>
          </div>
        </div>


        <!-- General Plumbing -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="p-8">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4">
                  </path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">General Plumbing</h2>
            </div>
            <p class="text-gray-600 mb-6">Comprehensive plumbing services for all your residential and commercial needs.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Fixture installation and repair</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Pipe replacement and repiping</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Bathroom and kitchen plumbing</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Leak detection and repair</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Service Areas -->
  <section class="py-16 bg-blue-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
        <p class="text-lg text-gray-600">We proudly serve the following areas</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Indianapolis</h3>
          <p class="text-gray-600">All neighborhoods and surrounding areas</p>
        </div>
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Carmel</h3>
          <p class="text-gray-600">Complete plumbing services</p>
        </div>
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Fishers</h3>
          <p class="text-gray-600">Residential and commercial</p>
        </div>
      </div>
    </div>
  </section>


</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Swiper modules
const modules = [Navigation, Pagination, Autoplay]

// Get business config
const appConfig = useAppConfig()
const business = appConfig.business

// Get base URL for images
const config = useRuntimeConfig()
const baseURL = config.app.baseURL || '/'


// Slide content
const slides = [
  {
    title: 'Professional Drain Cleaning',
    description: 'Expert drain and sewer line cleaning services to keep your plumbing flowing smoothly',
    image: `${baseURL}/images/drain-cleaning.jpg`
  },
  {
    title: 'Water Heater Installation & Repair',
    description: 'Complete water heater services including installation, repair, and maintenance',
    image: `${baseURL}/images/water-heater.jpg`
  },
  {
    title: 'Preventive Maintenance',
    description: 'Regular maintenance to prevent problems and extend the life of your plumbing system',
    image: `${baseURL}/images/preventative-maintenance.jpg`
  },
  {
    title: 'General Plumbing Services',
    description: 'From fixtures to pipes, we handle all your residential plumbing needs',
    image: `${baseURL}/images/general-plumbing.jpg`
  }
]

// SEO and meta tags
useHead({
  title: `Services - ${business.name} | Plumbing Services in Indianapolis`,
  meta: [
    { name: 'description', content: `Complete plumbing services including drain cleaning, water heater installation, emergency repairs, and general plumbing. Serving Indianapolis and surrounding areas.` },
    { name: 'keywords', content: 'drain cleaning, water heater installation, emergency plumbing, Indianapolis plumber, plumbing services' }
  ]
})
</script>

<style>
.services-hero-swiper {
  --swiper-navigation-color: #fff;
  --swiper-pagination-color: #fff;
}

.services-hero-swiper .swiper-button-next,
.services-hero-swiper .swiper-button-prev {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.services-hero-swiper .swiper-button-next:after,
.services-hero-swiper .swiper-button-prev:after {
  font-size: 20px;
}

.services-hero-swiper .swiper-pagination-bullet {
  background: #fff;
  opacity: 0.5;
}

.services-hero-swiper .swiper-pagination-bullet-active {
  opacity: 1;
}
</style>