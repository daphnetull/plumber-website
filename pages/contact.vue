<template>
    <!-- Page Header -->
    <section class="bg-blue-900 text-white py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact {{ business.name }}</h1>
          <p class="text-xl text-blue-100">Get in touch for fast, reliable plumbing services</p>
        </div>
      </div>
    </section>
  
    <!-- Contact Methods -->
  <section class="pt-16 pb-4 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        
        <!-- Phone -->
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
          <p class="text-gray-600 mb-4">Best for quick assistance</p>
          <div class="mb-4">
            <a :href="'tel:' + business.phone" 
               class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
              {{ business.phone }}
            </a>
          </div>
          <p class="text-sm text-gray-500">Please leave a message if we're unavailable</p>
        </div>

        <!-- Email -->
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
          <p class="text-gray-600 mb-4">For quotes and general inquiries</p>
          <div class="mb-4">
            <a :href="'mailto:' + business.email" 
               class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
              Email Us
            </a>
          </div>
          <p class="text-sm text-gray-500">We'll respond within 24 hours</p>
        </div>

        <!-- Online Booking -->
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Schedule Online</h3>
          <p class="text-gray-600 mb-4">Book your appointment 24/7</p>
          <div class="mb-4">
            <button @click="showBooking = true"
                    class="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Book Appointment
            </button>
          </div>
          <p class="text-sm text-gray-500 mt-3">Choose your preferred time</p>
        </div>

      </div>
    </div>
  </section>
  
    <!-- Online Booking Section -->
    <section v-if="showBooking" class="py-4 bg-blue-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-900">Schedule Your Appointment</h2>
            <button @click="showBooking = false" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <!-- Google Calendar Booking Iframe -->
          <div class="w-full h-96 border rounded-lg overflow-hidden" style="height: 70vh; min-height: 500px; max-height: 800px;">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ36LaxMJUwd7LwlpPDX6VfikoX7Azfvlp-zpJsdG8wSKcZaZ6VRxw8JBPKf4f4s9hHfe--AxcfM?gv=true"
              width="100%" 
              height="100%" 
              frameborder="0"
              class="rounded-lg">
            </iframe>
          </div>
          
          <!-- Fallback for iframe issues -->
          <div class="mt-4 p-4 bg-gray-50 rounded-lg">
            <p class="text-sm text-gray-600">
              <strong>Having trouble with the booking calendar?</strong> 
              <a :href="'tel:' + business.phone" class="text-blue-600 hover:text-blue-800 font-semibold">Call us directly</a> 
              at {{ business.phone }} and we'll schedule your appointment over the phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Service Areas -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
          <p class="text-lg text-gray-600">We proudly serve {{ business.serviceArea }}</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6 shadow-sm text-center">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Indianapolis</h3>
            <p class="text-gray-600">All neighborhoods and districts</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-sm text-center">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Carmel</h3>
            <p class="text-gray-600">Full service coverage</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-sm text-center">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Fishers</h3>
            <p class="text-gray-600">Residential & commercial</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-sm text-center">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Westfield</h3>
            <p class="text-gray-600">Complete plumbing services</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-sm text-center">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Noblesville</h3>
            <p class="text-gray-600">Emergency & routine service</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-sm text-center">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Zionsville</h3>
            <p class="text-gray-600">Professional plumbing solutions</p>
          </div>
        </div>
  
        <div class="text-center mt-8">
          <p class="text-gray-600">
            Don't see your area listed? <a :href="'tel:' + business.phone" class="text-blue-600 hover:text-blue-800 font-semibold">Give us a call</a> - we may still be able to help!
          </p>
        </div>
      </div>
    </section>
  
    <!-- Business Hours -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-start">
          
          <!-- Hours -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Business Hours</h2>
            <div class="space-y-4">
              <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span class="font-semibold text-gray-900">Monday - Friday</span>
                <span class="text-gray-600">7:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span class="font-semibold text-gray-900">Saturday</span>
                <span class="text-gray-600">8:00 AM - 4:00 PM</span>
              </div>
              <!-- <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span class="font-semibold text-gray-900">Sunday</span>
                <span class="text-gray-600">Emergency Only</span>
              </div>
              <div class="flex justify-between items-center py-3">
                <span class="font-semibold text-gray-900">Emergency Service</span>
                <span class="text-green-600 font-semibold">24/7</span>
              </div> -->
            </div>
  
            <!-- <div class="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 class="text-lg font-semibold text-red-800 mb-2">Emergency Service</h3>
              <p class="text-red-700 mb-3">
                Plumbing emergencies don't wait for business hours. Call us anytime for:
              </p>
              <ul class="text-red-700 space-y-1">
                <li>• Burst pipes</li>
                <li>• Severe leaks</li>
                <li>• Sewer backups</li>
                <li>• No hot water</li>
              </ul>
            </div> -->
          </div>
  
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              </div>
  
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              </div>
  
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              </div>
  
              <div>
                <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <select 
                  id="service" 
                  v-model="form.service"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select a service</option>
                  <option value="drain-cleaning">Drain Cleaning</option>
                  <option value="water-heater">Water Heater Service</option>
                  <option value="emergency">Emergency Repair</option>
                  <option value="general">General Plumbing</option>
                  <option value="other">Other</option>
                </select>
              </div>
  
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please describe your plumbing issue or what service you need..."></textarea>
              </div>
  
              <button 
                type="submit"
                :disabled="submitting"
                class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                {{ submitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
  
            <div v-if="formStatus" class="mt-4 p-4 rounded-lg" :class="formStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'">
              {{ formStatus.message }}
            </div>
          </div>
  
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Get business config
  const appConfig = useAppConfig()
  const business = appConfig.business
  
  // Reactive data
  const showBooking = ref(false)
  const submitting = ref(false)
  const formStatus = ref(null)
  
  // Form data
  const form = reactive({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  // Form submission
  const submitForm = async () => {
    submitting.value = true
    formStatus.value = null
    
    // Simulate form submission (replace with actual form handling)
    try {
      // Here you would normally send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      formStatus.value = {
        type: 'success',
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
      }
      
      // Reset form
      Object.keys(form).forEach(key => form[key] = '')
      
    } catch (error) {
      formStatus.value = {
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please call us directly.'
      }
    } finally {
      submitting.value = false
    }
  }
  
  // SEO and meta tags
  useHead({
    title: `Contact - ${business.name} | Get in Touch for Plumbing Services`,
    meta: [
      { name: 'description', content: `Contact ${business.name} for professional plumbing services in Indianapolis. Call ${business.phone}, email us, or schedule online. 24/7 emergency service available.` },
      { name: 'keywords', content: 'contact plumber Indianapolis, plumbing appointment, emergency plumber, schedule plumbing service' }
    ]
  })
  </script>