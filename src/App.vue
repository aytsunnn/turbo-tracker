<script setup lang="ts">
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import BackgroundShadows from './components/BackgroundShadows.vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import ForWhomSection from './components/ForWhomSection.vue'
import MonitoringSection from './components/MonitoringSection.vue'
import AdvantagesSection from './components/AdvantagesSection.vue'
import TariffsSection from './components/TariffsSection.vue'
import FAQSection from './components/FAQSection.vue'

const scrollToSection = (event: Event, id: string) => {
  event.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="page-root">
    <!-- Background with shadows -->
    <BackgroundShadows />

    <!-- Header -->
    <Header />

    <!-- Main content -->
    <main class="relative z-10">
      <!-- Hero Section -->
      <HeroSection />

      <!-- Stats Section -->
      <StatsSection />

      <!-- For Whom Section -->
      <ForWhomSection />

      <!-- Monitoring Section -->
      <MonitoringSection />

      <!-- Advantages Section -->
      <AdvantagesSection />

      <!-- Tariffs Section -->
      <TariffsSection />

      <!-- FAQ Section -->
      <FAQSection />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
/* Адаптивные стили для скролл-отступов */
#for-whom,
#monitoring,
#tariffs,
#contacts {
  scroll-margin-top: 80px; /* Отступ для фиксированного хедера */
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
