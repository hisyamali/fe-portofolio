<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showContent = ref(false)

const handleScroll = () => {
  // Show content when user scrolls past 100px
  showContent.value = window.scrollY > 2500
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section
    class="hire-me-section bg-gray-50 min-h-screen flex items-center justify-center"
  >
    <div
      class="container flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 px-4"
    >
      <!-- Image Section -->
      <div
        class="image-wrapper transition-transform duration-500"
        :class="{
          'opacity-100': showContent,
          'opacity-0 translate-y-10': !showContent,
        }"
      >
        <img
          src="#"
          alt="Profile Picture"
          class="rounded-full shadow-lg max-w-xs"
        />
      </div>

      <!-- Text Section -->
      <div
        class="text-wrapper text-center md:text-left transition-all duration-500"
        :class="{
          'opacity-100': showContent,
          'opacity-0 translate-y-10': !showContent,
        }"
      >
        <h1 class="text-5xl font-bold text-gray-800">Hire Me</h1>
        <p class="text-2xl italic text-blue-600">FOR YOUR PROJECTS</p>
        <div class="border border-blue-600 rounded-lg p-4 mt-4 max-w-md">
          <p>
            Saya siap untuk mengerjakan project anda, mulai dari company
            profile, toko online, blog dan lain-lain. Tidak perlu bertatap muka,
            biarkan saya yang mengurusnya dan Anda tinggal menikmati hasilnya.
          </p>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=6289675623831&text=Halo,%20saya%20tertarik%20untuk%20membahas%20project."
          target="_blank"
          class="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
        >
          Hubungi saya
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hire-me-section {
  background: linear-gradient(180deg, #f7fafd, #ffffff);
}

.opacity-0 {
  opacity: 0;
  transform: translateY(10px);
}
.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}
</style>
