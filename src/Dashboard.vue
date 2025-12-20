<script setup lang="ts">
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import WelcomeSection from './components/WelcomeSection.vue'
import ToolsSection from './components/ToolsSection.vue'
import OptionallySection from './components/OptionallySection.vue'
</script>

<template>
  <Header />
  <div
    class="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-48 gap-8 md:gap-16 lg:gap-24 xl:gap-31 flex flex-col"
  >
    <WelcomeSection class="mt-8 sm:mt-12 md:mt-16 lg:mt-21" />
    <ToolsSection />
    <OptionallySection />
  </div>
  <Footer />
</template>
