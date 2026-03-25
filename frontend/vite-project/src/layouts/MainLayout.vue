<template>
  <div class="layout h-screen w-screen flex">
    <AppSidebar />

    <div class="main w-full">
      <AppNavbar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
</script>