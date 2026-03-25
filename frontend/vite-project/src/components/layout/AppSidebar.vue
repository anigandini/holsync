<template>
  <aside class="sidebar flex flex-col gap-4 p-4 bg-white border-[#E2E8F0] text-[#0F172A] border-x w-[20%] h-window">
    <div class="flex flex-row items-center gap-2">
      <img src="@/assets/favicon.png" alt="Logo" class="w-10 h-10" />
      <h3 class="font-semibold">HolSync</h3>
    </div>
    <div class="flex flex-col gap-2">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/properties">Properties</router-link>
      <router-link to="/calendar">Calendar</router-link>
    </div>
  </aside>
</template>