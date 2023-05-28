<template>
  <div>
    <div class="flex flex-col items-center bg-white relative pt-20" style="min-height: 100svh">
      <HavaneLogo/>
      <div class="w-full px-10 mt-16 mb-36 md:mt-52 justify-center items-center grid grid-cols-2 gap-4 md:flex md:flex-row md:space-x-16">
        <div class="flex justify-center items-center">
          <a href="#" class="flex justify-center items-center h-36 w-36 shadow-gray-200 shadow-md border-gray-100 border-[1px] border-solid transition-all hover:rotate-3 hover:shadow-amber-500 hover:border-amber-500">
            About Me
          </a>
        </div>
        <div class="flex justify-center items-center">
          <a href="#"  class="flex justify-center items-center h-36 w-36 shadow-gray-200 shadow-md border-gray-100 border-[1px] border-solid transition-all hover:-rotate-3 hover:shadow-accent-2 hover:border-accent-2">
            My Skills
          </a>
        </div>
        <div class="flex justify-center items-center">
          <a href="#"  class="flex justify-center items-center h-36 w-36 shadow-gray-200 shadow-md border-gray-100 border-[1px] border-solid transition-all hover:rotate-3 hover:shadow-primary-dark hover:border-primary-dark">
            My projects
          </a>
        </div>
        <div class="flex justify-center items-center">
          <a href="#"  class="flex justify-center items-center h-36 w-36 shadow-gray-200 shadow-md border-gray-100 border-[1px] border-solid border-solid transition-all hover:rotate-3 hover:shadow-primary-dark hover:border-primary-dark">
            My parkour
          </a>
        </div>
      </div>
    </div>

<!--    Bio    -->
    <div class="flex flex-col items-center bg-primary-dark text-xl text-white py-16 px-5" style="height: 500px">
      <h1>Hi, I'm Havane. Nice to meet you.</h1>
      <p class="mt-6">As a <span class="text-accent-2">junior developer</span>, i'm always ready to engage in new and interesting projects.</p>
      <p>My goal is to become a <span class="text-accent-2">fullstack developer</span>, and i'm currently working on it.</p>
      <p>My main focus is on the <span class="text-yellow-500">frontend</span>, but i'm also interested in <span class="text-yellow-500">backend development</span>.</p>
      
      <div>

      </div>
    </div>
    <div class="bg-white" style="height: 100svh">

    </div>
  </div>
</template>

<script>
import Navbar from '../components/subComps/Navbar.vue'
import HavaneLogo from "~/components/subComps/Havane.vue";
export default {
  components: {HavaneLogo},
  name: 'IndexPage',
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  },
  watch: {

  },
  computed: {

  }
}
</script>
