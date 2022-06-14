<template>
  <div
    class="w-full h-16 flex justify-center items-center bg-tertiary drop-shadow text-primary"
  >
    <div class="flex sm:w-2/3 items-center relative">
      <NavbarLink class="text-accent-2"> Havane Palabaud </NavbarLink>
      <v-separator />
      <NavbarLink to="/about"> About </NavbarLink>
      <NavbarLink to="/contact"> Contact </NavbarLink>
      <div class="absolute right-0 flex items-center h-full p-2">
        <a class="rounded-md text-tertiary bg-accent-2 p-2 cursor-pointer hover:opacity-100">Hire me</a>
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
