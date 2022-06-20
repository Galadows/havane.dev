<template>
  <div
    class="h-screen w-screen flex flex-col justify-center items-center bg-primary-dark relative"
  >
    <Navbar class="absolute top-0" />

    <div class="text-left snap-center text-tertiary p-5">
      <h1>
        <span class="text-center">Hello ! </span><br />
        I'm <span class="text-accent-2">Havane Palabaud</span>, a 24 year old
        developer in the making !<br />
        I'm searching for a new Apprenticeship starting in september 2022<br />
        The technologies i work with the most are
        <span class="text-yellow-500">nodeJs</span> and
        <span class="text-green-500">vueJs</span> as of now, but i'm always
        looking for something new<br />
        Don't hesitate to
        <a
          href="mailto:havanepalabaud@gmail.com"
          class="underline decoration-tertiary hover:text-accent-2"
          >contact me</a
        >
      </h1>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/subComps/Navbar.vue'
export default {
  components: { Navbar },
  name: 'About',
}
</script>
