<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import BackgroundShadows from './components/BackgroundShadows.vue'

import WelcomeSection from './components/WelcomeSection.vue'
import ToolsSection from './components/ToolsSection.vue'
import OptionallySection from './components/OptionallySection.vue'

import { toolsShadows } from './components/shadows/tools'
</script>

<template>
  <div class="scale-75-wrapper">
    <div class="page-root">
      <!-- Background -->
      <BackgroundShadows :circles="toolsShadows" :offset-x="350" :offset-y="320" />

      <!-- Header -->
      <Header />

      <!-- Content -->
      <div
        class="relative mx-auto px-4 lg:px-0 lg:w-7xl gap-8 lg:gap-24 flex flex-col items-center justify-center"
      >
        <WelcomeSection class="mt-8 sm:mt-12 md:mt-16 lg:mt-21" />
        <ToolsSection />
        <OptionallySection />
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.page-root {
  position: relative;
}
</style>
