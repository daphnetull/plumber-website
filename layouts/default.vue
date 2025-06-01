<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Header/Navigation -->
        <header class="bg-white shadow-sm">
            <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center py-6">
                    <div class="flex items-center">
                        <NuxtLink to="/" class="text-2xl font-bold text-blue-900">{{ business.name }}</NuxtLink>
                    </div>
                    <div class="hidden md:flex space-x-8">
                        <NuxtLink to="/" class="text-gray-900 hover:text-blue-600"
                            :class="{ 'text-blue-600 font-semibold': $route.path === '/' }">Home</NuxtLink>
                        <NuxtLink to="/services" class="text-gray-900 hover:text-blue-600"
                            :class="{ 'text-blue-600 font-semibold': $route.path === '/services' }">Services</NuxtLink>
                        <NuxtLink to="/about" class="text-gray-900 hover:text-blue-600"
                            :class="{ 'text-blue-600 font-semibold': $route.path === '/about' }">About</NuxtLink>
                        <NuxtLink to="/contact" class="text-gray-900 hover:text-blue-600"
                            :class="{ 'text-blue-600 font-semibold': $route.path === '/contact' }">Contact</NuxtLink>
                    </div>
                    <div class="md:hidden">
                        <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-900">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu -->
                <div v-show="mobileMenuOpen" class="md:hidden border-t border-gray-200 py-4">
                    <div class="space-y-2">
                        <NuxtLink to="/" class="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                            @click="mobileMenuOpen = false">Home</NuxtLink>
                        <NuxtLink to="/services" class="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                            @click="mobileMenuOpen = false">Services</NuxtLink>
                        <NuxtLink to="/about" class="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                            @click="mobileMenuOpen = false">About</NuxtLink>
                        <NuxtLink to="/contact" class="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                            @click="mobileMenuOpen = false">Contact</NuxtLink>
                    </div>
                </div>
            </nav>
        </header>

        <!-- Page Content -->
        <main>
            <slot />
        </main>

        <!-- Contact Section -->
        <section class="py-16 bg-blue-900 text-white">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl font-bold mb-6">{{ randomCtaMessage }}</h2>
                <p class="text-xl mb-8 text-blue-100">
                    Contact us today for fast, reliable plumbing services
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a :href="'tel:' + business.phone"
                        class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                        Call: {{ business.phone }}
                    </a>
                    <NuxtLink to="/contact"
                        class="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                        Schedule Appointment
                    </NuxtLink>
                </div>
                <div class="mt-8 text-blue-100">
                    <p>Serving {{ business.serviceArea }}</p>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-8">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 class="text-lg font-semibold mb-4">{{ business.name }}</h4>
                        <p class="text-gray-300">Professional plumbing services you can trust</p>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
                        <p class="text-gray-300">Phone: {{ business.phone }}</p>
                        <p class="text-gray-300">Email: {{ business.email }}</p>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Service Area</h4>
                        <p class="text-gray-300">{{ business.serviceArea }}</p>
                    </div>
                </div>
                <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                    <p>&copy; 2025 {{ business.name }}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
// Get business config
const appConfig = useAppConfig()
const business = appConfig.business

// Mobile menu state
const mobileMenuOpen = ref(false)

// Random CTA messages
const ctaMessages = [
    "Ready to Get Started?",
    "Need Plumbing Help?",
    "Ready to Fix That Problem?",
    "Don't Let Plumbing Issues Wait",
    "Get Your Plumbing Back on Track",
    "Time to Call the Experts?",
    "Let's Solve Your Plumbing Problem",
    "Professional Help is Just a Call Away",
    "Having Plumbing Troubles?"    
]

// Pick a random message
const randomCtaMessage = computed(() => {
    return ctaMessages[Math.floor(Math.random() * ctaMessages.length)]
})


// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
    mobileMenuOpen.value = false
})
</script>