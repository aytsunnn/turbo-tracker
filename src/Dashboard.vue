<script setup lang="ts">
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import WelcomeSection from './components/WelcomeSection.vue'
import ToolsSection from './components/ToolsSection.vue'
import OptionallySection from './components/OptionallySection.vue'

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <Header />
  <div class="mx-48 gap-31 flex flex-col">
    <WelcomeSection class="mt-21" />
    <ToolsSection />
    <OptionallySection />
  </div>
  <Footer />
</template>
