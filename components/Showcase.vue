<template>
  <div class="flex h-full w-full">
    <div class="flex flex-1 flex-col items-center p-20">
      <h1 class="mb-2 w-full text-2xl text-yellow-100">
        {{fakeTag}}
        </h1>
      <div class="flex flex-col items-center w-full">
        <h1 class="mb-2 w-full text-2xl text-yellow-100">
          Web<span class="text-yellow-500">() {</span>
        </h1>
        <div class="flex w-full space-x-1">
          <div
            class="h-32 w-32 flex flex-col justify-center items-center text-pink-500"
          >
            return
          </div>
          <div
            class=" h-32 w-32 flex flex-col justify-center items-center hover:scale-110 text-tertiary"
          >
            <fa :icon="['fab', 'html5']" class="h-3/4 text-orange-500" />
            Html5
          </div>
          <div
            class=" h-32 w-32 flex flex-col justify-center items-center hover:scale-110 text-tertiary"
          >
            <fa :icon="['fab', 'css3']" class="h-3/4 text-blue-600" />
            Css3
          </div>
          <div
            class="h-32 w-32 flex flex-col justify-center items-center hover:scale-110 text-tertiary"
          >
            <fa :icon="['fab', 'js']" class="h-3/4 text-yellow-500" />
            Javascript
          </div>

          <div
            class=" h-32 w-32 flex flex-col justify-center items-center hover:scale-110 text-tertiary"
          >
            <fa :icon="['fab', 'vuejs']" class="h-3/4 text-green-500" />
            VueJs
          </div>
          <div
            class="h-32 w-32 flex flex-col justify-center items-center hover:scale-110 text-tertiary"
          >
            <fa :icon="['fab', 'react']" class="h-3/4 text-blue-500" />
            ReactJs
          </div>
        </div>
        <h1 class="mb-2 w-full text-2xl">
          <span class="text-yellow-500">}</span>
        </h1>
      </div>
      <div class="flex flex-col items-center w-full">
        <h1 class="mb-2 w-full text-2xl text-yellow-100">
          App<span class="text-yellow-500">() {</span>
        </h1>
        <div class="flex w-full space-x-1">
          <div
            class="h-32 w-32 flex flex-col justify-center items-center text-pink-500"
          >
            return
          </div>
          <div
            class="h-32 w-32 flex flex-col justify-center items-center hover:scale-110 text-tertiary"
          >
            <fa :icon="['fab', 'java']" class="h-3/4 text-orange-500" />
            Java
          </div>

        </div>
        <h1 class="mb-2 w-full text-2xl">
          <span class="text-yellow-500">}</span>
        </h1>
      </div>
    </div>
    <div class="flex flex-col flex-1 opacity-30 bg-black"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      fakeTag: '<script>'
    }
  }
}
</script>

<style></style>
