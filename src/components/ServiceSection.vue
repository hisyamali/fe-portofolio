<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const services = ref([
  { name: 'Web Development', icon: '/image/png-transparent-web-development-web-design-software-development-web-developer-web-design-blue-angle-web-design.png', description: 'Pembuatan website dengan teknologi terbaru yang dapat membantu bisnis Anda.' },
  { name: 'UI/UX Designing', icon: '/image/ui-ux.jpeg', description: 'Desain UI/UX untuk website dan aplikasi mobile yang dapat digunakan untuk prototipe.' },
  { name: 'Sistem Maintenance', icon: '/image/png-transparent-computer-icons-mechanical-engineering-law-firm-logo-law-firm-maintenance-thumbnail.png', description: 'Layanan maintenance sistem untuk menjaga performa dan keamanan dengan model up-to-date.' }
])

const showService = ref(false)
const showServiceCards = ref(new Array(services.value.length).fill(false))

const handleScroll = () => {
  if (!showService.value && window.scrollY > 1200) {
    showService.value = true
    showServiceCards.value.forEach((_, index) => {
      setTimeout(() => {
        showServiceCards.value[index] = true
      }, index * 200)
    })
  } else if (showService.value && window.scrollY < 1200) {
    showService.value = false
    showServiceCards.value.forEach((_, index) => {
      setTimeout(() => {
        showServiceCards.value[index] = false
      }, index * 200)
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="bg-blue-50 py-20" style="min-height: 100vh">
    <div class="container mx-auto py-16">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800">Services</h2>
        <p class="text-xl font-semibold text-blue-600 italic">WHAT I OFFER</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 group">
        <transition name="fade" v-for="(service, index) in services" :key="index">
          <div
            v-if="showServiceCards[index]"
            class="bg-white p-8 rounded-lg shadow-lg max-w-sm transition-transform duration-500 hover:scale-105 group-hover:blur-sm hover:!blur-none"
          >
            <div class="flex items-center justify-center mb-4">
              <img :src="service.icon" :alt="service.name" class="w-10 h-10 mr-4" />
              <h3 class="text-xl font-semibold text-gray-800">{{ service.name }}</h3>
            </div>
            <p class="text-gray-600 text-center">{{ service.description }}</p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
