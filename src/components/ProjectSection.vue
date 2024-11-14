<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const projects = ref([
  { name: 'Biartha.id', description: 'Modal Kerja', image: '/image/biartha.png' },
  { name: 'Tokla.id', description: 'Marketplace', image: '/image/toklaId.png' },
  { name: 'Tapismall.id', description: 'Marketplace Lokal Lampung', image: '/image/tapismall.png' },
  { name: 'Srayamall.com', description: 'Marketplace', image: '/image/srayamall.png' },
  { name: 'Isirumah.id', description: 'E-commerce', image: '/image/isirumah.png' },
  { name: 'Bmartmetal.co.id', description: 'E-commerce', image: '/image/bmart.png' },
  { name: 'hnsidigital.id', description: 'Website Anggota Nelayan', image: '/image/hnsidigital.png' },
])

const showProjects = ref(false)
const showProjectCards = ref(new Array(projects.value.length).fill(false))

const handleScroll = () => {
  if (window.scrollY > 1700 && !showProjects.value) {
    showProjects.value = true
    showProjectCards.value.forEach((_, index) => {
      setTimeout(() => {
        showProjectCards.value[index] = true
      }, index * 200) // Adjust the delay if needed
    })
  } else if (window.scrollY <= 1700 && showProjects.value) {
    showProjects.value = false
    showProjectCards.value.forEach((_, index) => {
      setTimeout(() => {
        showProjectCards.value[index] = false
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

// Pagination
const currentChunkIndex = ref(0)
const projectChunks = ref([])

// Chunk the projects into visible groups (adjust the chunk size as needed)
const chunkProjects = () => {
  const chunkSize = 4
  for (let i = 0; i < projects.value.length; i += chunkSize) {
    projectChunks.value.push(projects.value.slice(i, i + chunkSize))
  }
}
chunkProjects()

const visibleProjects = ref(projectChunks.value[currentChunkIndex.value])

const goToProject = (index) => {
  currentChunkIndex.value = index
  visibleProjects.value = projectChunks.value[index]
}

const prevProject = () => {
  if (currentChunkIndex.value > 0) {
    currentChunkIndex.value -= 1
    visibleProjects.value = projectChunks.value[currentChunkIndex.value]
  }
}

const nextProject = () => {
  if (currentChunkIndex.value < projectChunks.value.length - 1) {
    currentChunkIndex.value += 1
    visibleProjects.value = projectChunks.value[currentChunkIndex.value]
  }
}
</script>

<template>
  <section class="bg-gray-50 py-20" style="min-height: 100vh">
    <div class="container mx-auto px-8">
      <!-- Title Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800">Projects</h1>
        <p class="text-xl italic text-gray-600">MY CREATION</p>
      </div>

      <!-- Project Cards Section -->
      <div class="flex items-center justify-center space-x-4 mt-8">
        <button @click="prevProject" class="scroll-button">&lt;</button>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8">
          <transition name="fade" v-for="(project, index) in visibleProjects" :key="index">
            <div
              v-if="showProjectCards[index]"
              class="project-card bg-white p-4 rounded-lg shadow-lg duration-500 transform transition-transform"
              :class="{
                'opacity-100 translate-y-0': showProjectCards[index],
                'opacity-0 translate-y-10': !showProjectCards[index],
              }"
            >
              <img :src="project.image" :alt="project.name" class="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 class="text-2xl font-semibold text-gray-800">{{ project.name }}</h3>
              <p class="text-gray-600">{{ project.description }}</p>
              <a href="#" class="text-blue-500 hover:underline">READ MORE</a>
            </div>
          </transition>
        </div>
        <button @click="nextProject" class="scroll-button">&gt;</button>
      </div>

      <!-- Circular Buttons for Scroll Pagination -->
      <div class="flex justify-center mt-6 space-x-3">
        <span
          v-for="(project, index) in projectChunks.length"
          :key="index"
          @click="goToProject(index)"
          class="h-4 w-4 bg-gray-300 rounded-full cursor-pointer"
          :class="{ 'bg-blue-500': currentChunkIndex === index, 'bg-gray-300': currentChunkIndex !== index }"
        ></span>
      </div>
    </div>
  </section>
</template>

<style scoped>

.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.translate-y-10 {
  transform: translateY(10px);
}
.translate-y-0 {
  transform: translateY(0);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.scroll-button {
  font-size: 24px;
  padding: 0.5rem;
  background-color: #f3f4f6;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.scroll-button:hover {
  background-color: #e5e7eb;
}

</style>
