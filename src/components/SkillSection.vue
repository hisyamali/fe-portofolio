<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const skills = ref([
  { name: 'Figma', level: 'Intermediate', image: '/image/png-transparent-figma-logo-brand-logos-brands-in-colors-icon-thumbnail.png' },
  { name: 'Laravel', level: 'Intermediate to Advanced', image: '/image/png-transparent-laravel-hd-logo.png' },
  { name: 'Adobe Photoshop', level: 'Intermediate', image: '/image/png-transparent-adobe-photoshop-macos-bigsur-icon-thumbnail.png' },
  { name: 'React.js', level: 'Advanced', image: '/image/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png' },
  { name: 'HTML5', level: 'Advanced', image: '/image/png-transparent-logo-html-html5.png' },
  { name: 'Tailwind CSS', level: 'Advanced', image: '/image/png-transparent-tailwind-css-hd-logo-thumbnail.png' },
  { name: 'Vue.js', level: 'Advanced', image: '/image/png-transparent-vuejs-original-wordmark-logo-icon.png' },
  { name: 'SQL', level: 'Advanced', image: '/image/png-transparent-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo-thumbnail.png' },
])

const showSkills = ref(false)
const showSkillCards = ref(new Array(skills.value.length).fill(false))

const handleScroll = () => {
  if (window.scrollY > 300 && !showSkills.value) {
    showSkills.value = true
    showSkillCards.value.forEach((_, index) => {
      setTimeout(() => {
        showSkillCards.value[index] = true
      }, index * 200)
    })
  } else if (window.scrollY <= 300 && showSkills.value) {
    showSkills.value = false
    showSkillCards.value.forEach((_, index) => {
      setTimeout(() => {
        showSkillCards.value[index] = false
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
    <div class="container mx-auto px-8">
      <h1 class="text-4xl font-bold text-gray-800">Skills</h1>
      <p class="text-xl italic text-gray-600">MY TOP SKILLS</p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4">
        <transition name="fade" v-for="(card, index) in skills" :key="index">
          <div
            v-if="showSkillCards[index]"
            class="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between transform transition-transform duration-500"
            :class="{
              'translate-y-0 opacity-100': showSkillCards[index],
              'translate-y-10 opacity-0': !showSkillCards[index],
            }"
          >
            <div>
              <img :src="card.image" :alt="card.name" class="w-10 h-10 mb-2" />
              <h3 class="text-2xl font-semibold text-gray-800">{{ card.name }}</h3>
              <p class="text-gray-600">{{ card.level }}</p>
            </div>
            <span class="text-gray-800 text-xl">→</span>
          </div>
        </transition>
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
</style>
