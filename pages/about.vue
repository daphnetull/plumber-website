<template>
    <!-- Page Header -->
    <section class="bg-blue-900 text-white py-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">About {{ business.name }}</h1>
                <p class="text-xl text-blue-100">Professional plumbing services you can trust</p>
            </div>
        </div>
    </section>

    <!-- Main About Section -->
    <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">Your Trusted Local Plumber</h2>
                    <div class="space-y-4 text-gray-600">
                        <p class="text-lg">
                            With over 15 years of experience serving the Indianapolis area, {{ business.name }} has
                            built a reputation for reliable, professional plumbing services that homeowners and
                            businesses can count on.
                        </p>
                        <p>
                            We understand that plumbing problems can be stressful and disruptive to your daily life.
                            That's why we're committed to providing fast, efficient solutions with transparent pricing
                            and exceptional customer service.
                        </p>
                        <p>
                            From simple repairs to complex installations, our goal is to solve your plumbing issues
                            right the first time, so you can get back to what matters most.
                        </p>
                    </div>
                </div>
                <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                    <p class="text-gray-500">[Professional photo placeholder]</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Credentials & Experience -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Qualifications & Experience</h2>
                <p class="text-lg text-gray-600">Licensed, insured, and committed to excellence</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Licensed</h3>
                    <p class="text-gray-600">State licensed professional plumber</p>
                </div>

                <div class="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Insured</h3>
                    <p class="text-gray-600">Fully insured for your protection</p>
                </div>

                <div class="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">15+ Years</h3>
                    <p class="text-gray-600">Extensive plumbing experience</p>
                </div>

                <div class="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                            </path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Local</h3>
                    <p class="text-gray-600">Indianapolis area specialist</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Approach -->
    <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
                <p class="text-lg text-gray-600">What sets us apart from other plumbing services</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Honest Pricing</h3>
                    <p class="text-gray-600">
                        We provide upfront, transparent pricing with no hidden fees. You'll know exactly what you're
                        paying before we start any work.
                    </p>
                </div>

                <div class="text-center">
                    <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Fast Response</h3>
                    <p class="text-gray-600">
                        We understand plumbing issues can be stressful and inconvenient. That's why we respond quickly
                        and work efficiently to get your plumbing back to normal as soon as possible.
                    </p>
                </div>

                <div class="text-center">
                    <div class="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Quality Work</h3>
                    <p class="text-gray-600">
                        We take pride in our craftsmanship and stand behind our work. Every job is done right the first
                        time with quality materials and attention to detail.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Service Areas -->
    <section class="py-16 bg-blue-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
                <p class="text-lg text-gray-600">Proudly serving {{ business.serviceArea }}</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                <div class="bg-white rounded-lg p-4 shadow-sm">
                    <h3 class="font-semibold text-gray-900">Indianapolis</h3>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm">
                    <h3 class="font-semibold text-gray-900">Carmel</h3>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm">
                    <h3 class="font-semibold text-gray-900">Fishers</h3>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm">
                    <h3 class="font-semibold text-gray-900">Westfield</h3>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm">
                    <h3 class="font-semibold text-gray-900">Noblesville</h3>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm">
                    <h3 class="font-semibold text-gray-900">Zionsville</h3>
                </div>
            </div>

            <div class="text-center mt-8">
                <p class="text-gray-600">
                    Not sure if we serve your area? <a :href="'tel:' + business.phone"
                        class="text-blue-600 hover:text-blue-800 font-semibold">Call us</a> to find out!
                </p>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                <p class="text-lg text-gray-600">Don't just take our word for it</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-gray-50 rounded-lg p-6">
                    <div class="flex mb-4">
                        <span class="text-yellow-400 text-xl">★★★★★</span>
                    </div>
                    <p class="text-gray-600 mb-4">
                        "Professional, prompt, and fairly priced. Fixed our water heater issue quickly and explained
                        everything clearly. Highly recommend!"
                    </p>
                    <p class="font-semibold text-gray-900">- Sarah M., Carmel</p>
                </div>

                <div class="bg-gray-50 rounded-lg p-6">
                    <div class="flex mb-4">
                        <span class="text-yellow-400 text-xl">★★★★★</span>
                    </div>
                    <p class="text-gray-600 mb-4">
                        "Had a drain emergency on Sunday evening. They came out quickly and got everything working
                        perfectly. Great service!"
                    </p>
                    <p class="font-semibold text-gray-900">- Mike R., Indianapolis</p>
                </div>

                <div class="bg-gray-50 rounded-lg p-6">
                    <div class="flex mb-4">
                        <span class="text-yellow-400 text-xl">★★★★★</span>
                    </div>
                    <p class="text-gray-600 mb-4">
                        "Honest pricing and quality work. They installed our new water heater efficiently and cleaned up
                        perfectly. Will definitely call again!"
                    </p>
                    <p class="font-semibold text-gray-900">- Jennifer L., Fishers</p>
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
    title: `About - ${business.name} | Licensed Plumber in Indianapolis`,
    meta: [
        { name: 'description', content: `Learn about ${business.name}, your trusted local plumber with 15+ years of experience serving Indianapolis and surrounding areas. Licensed, insured, and committed to quality.` },
        { name: 'keywords', content: 'about plumber Indianapolis, licensed plumber, experienced plumber, local plumbing company' }
    ]
})
</script>