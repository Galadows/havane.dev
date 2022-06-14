<template>
  <div class="flex items-center p-4">
    <NuxtLink
      :to="to"
      class="opacity-75 hover:opacity-100 cursor-pointer"
      active-class="opacity-100"
    >
      <slot></slot>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style></style>
