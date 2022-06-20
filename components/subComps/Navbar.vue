<template>
  <div
    class="w-full h-16 flex justify-center items-center bg-tertiary drop-shadow text-primary z-10"
  >
    <div class="flex sm:w-2/3 items-center relative">
      <NavbarLink class="text-accent-2">}{avane Palabaud </NavbarLink>
      <v-separator />
      <NavbarLink to="/about"> About </NavbarLink>
      <a class="opacity-75 hover:opacity-100" href="mailto:havanepalabaud@gmail.com"> Contact </a>
      <div class="absolute right-0 flex items-center h-full p-2">
        <a href="mailto:havanepalabaud@gmail.com" class=" text-tertiary bg-accent-2 p-2 cursor-pointer hover:bg-tertiary border-accent-2 border-2 hover:text-accent-2">Hire me</a>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarLink from './NavbarLink.vue'
import VSeparator from './v-separator.vue'
export default {
  components: { NavbarLink, VSeparator },
}
</script>

<style></style>
