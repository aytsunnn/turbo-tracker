<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import BackgroundShadows from './components/BackgroundShadows.vue'

import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import ForWhomSection from './components/ForWhomSection.vue'
import MonitoringSection from './components/MonitoringSection.vue'
import AdvantagesSection from './components/AdvantagesSection.vue'
import TariffsSection from './components/TariffsSection.vue'
import FAQSection from './components/FAQSection.vue'

import { homeShadows } from './components/shadows/home'
import { toolsShadows } from './components/shadows/tools'

const route = useRoute()

onMounted(() => {
  if (window.location.hash) {
    const id = window.location.hash.substring(1)
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }
})
</script>

<template>
  <div class="page-root">
    <BackgroundShadows :circles="homeShadows" :offset-x="0" :offset-y="0" />

    <Header />

    <main class="relative z-10">
      <HeroSection />
      <StatsSection />
      <ForWhomSection />
      <MonitoringSection />
      <AdvantagesSection />
      <TariffsSection />
      <FAQSection />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
#for-whom,
#monitoring,
#tariffs,
#contacts {
  scroll-margin-top: 80px;
}

@media (max-width: 768px) {
  #for-whom,
  #monitoring,
  #tariffs,
  #contacts {
    scroll-margin-top: 60px;
  }
}

.page-root {
  min-height: 100vh;
  position: relative;
}
</style>
