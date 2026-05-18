<script setup>
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HomeSection from './components/sections/HomeSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import BlogSection from './components/sections/BlogSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import ToastNotification from './components/ui/ToastNotification.vue'
</script>

<template>
  <AppNavbar />
  <main>
    <HomeSection />
    <AboutSection />
    <ProjectsSection />
    <BlogSection />
    <ContactSection />
  </main>
  <AppFooter />
  <ToastNotification />
</template>
