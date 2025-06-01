<template>
    <!-- Hero Section -->
    <section class="bg-blue-900 text-white py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Professional Plumbing Services
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100">
            Fast, reliable, and affordable plumbing solutions for your home and business
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="'tel:' + business.phone" 
               class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Call Now: {{ business.phone }}
            </a>
            <NuxtLink to="/contact" 
               class="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Online
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Services Overview -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p class="text-lg text-gray-600">Complete plumbing solutions for all your needs</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Drain Cleaning</h3>
            <p class="text-gray-600">Professional drain and sewer line cleaning to keep your pipes flowing smoothly</p>
          </div>
  
          <div class="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Water Heater Service</h3>
            <p class="text-gray-600">Installation, repair, and maintenance of all types of water heating systems</p>
          </div>
  
          <div class="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Maintenance Services</h3>
          <p class="text-gray-600">Regular maintenance to prevent problems and keep your plumbing running smoothly</p>
        </div>
        </div>
  
        <div class="text-center mt-12">
          <NuxtLink to="/services" 
                    class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All Services
          </NuxtLink>
        </div>
      </div>
    </section>
  
    <!-- About Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Why Choose {{ business.name }}?</h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-semibold text-gray-900">Licensed & Insured</h3>
                  <p class="text-gray-600">Fully licensed plumber with comprehensive insurance coverage</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-semibold text-gray-900">15+ Years Experience</h3>
                  <p class="text-gray-600">Extensive experience with residential and commercial plumbing</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-semibold text-gray-900">Fair Pricing</h3>
                  <p class="text-gray-600">Transparent, upfront pricing with no hidden fees</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p class="text-gray-500">[Placeholder for plumber photo or work images]</p>
          </div>
        </div>
      </div>
    </section>
  
    
  </template>
  
  <script setup>
  // Get business config
  const appConfig = useAppConfig()
  const business = appConfig.business
  
  // SEO and meta tags
  useHead({
    title: `${business.name} - Professional Plumbing Services in Indianapolis`,
    meta: [
      { name: 'description', content: `Professional plumbing services in Indianapolis. Licensed plumber offering drain cleaning, and water heater service. Call ${business.phone}.` },
      { name: 'keywords', content: 'plumber, plumbing services, Indianapolis, drain cleaning, water heater, emergency plumbing' }
    ]
  })
  </script>