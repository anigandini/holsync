<template>
  <nav class="navbar w-[100%] p-4 flex items-center place-content-between border-b border-[#E2E8F0]">
    <SearchBar />
    <img src="@/assets/notification-bell.svg" alt="Notification" class="w-5 h-5 mr-2" />
    <UserMenu />
  </nav>
</template>

<script setup>
import SearchBar from '@/components/UI/SearchBar.vue'
import UserMenu from '@/components/UI/UserMenu.vue'
</script>