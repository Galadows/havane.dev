<template>
  <div
    class="h-screen w-screen flex flex-col justify-center items-center bg-primary relative"
  >
    <Navbar class="absolute top-0" />
  </div>
</template>

<script>
import Navbar from '../components/subComps/Navbar.vue'
export default {
  components: { Navbar },
  name: 'IndexPage',
}
</script>
