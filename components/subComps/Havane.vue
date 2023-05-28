
<template>
<div class="flex flex-col justify-center items-center">
  <h1 class="text-primary-dark text-7xl animate-intro flex flex-row align-bottom animate-appear" style="letter-spacing: .15rem;align-items: baseline">
    <svg id="Calque_2" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.62 138.28" width="120">
      <defs>
        <style>
          .cls-1 {
            fill: #e63947;
          }
        </style>
      </defs>
      <g id="Calque_1-2" data-name="Calque 1">
        <g>
          <g>
            <path class="cls-1" d="m15.67,64.95c6.88,0,11.72,1.04,14.5,3.11,2.78,2.07,3.91,5.64,3.39,10.7l-1.12,10.7c-.2,1.9.12,3.38.97,4.45.85,1.07,2.08,1.83,3.69,2.26,1.61.44,3.47.65,5.59.65v9.58c-2.1,0-3.95.22-5.58.65-1.62.44-2.86,1.19-3.7,2.26-.85,1.07-1.17,2.56-.97,4.45l1.12,10.63c.57,5.11-.54,8.71-3.35,10.78-2.81,2.07-7.65,3.11-14.54,3.11v-8.23c2.29,0,4.08-.32,5.35-.95,1.27-.64,1.81-1.9,1.61-3.8l-1.16-11.04c-.3-2.82,0-5.08.92-6.79s2.3-3.02,4.17-3.93c1.87-.91,4.07-1.55,6.59-1.93-2.67-.4-4.93-1.05-6.79-1.95-1.86-.9-3.21-2.2-4.06-3.91-.85-1.71-1.12-3.97-.82-6.79l1.16-11.04c.2-1.9-.34-3.16-1.63-3.8-1.29-.64-3.06-.95-5.33-.95v-8.23Z"/>
            <path class="cls-1" d="m85.48,64.95v8.23c-2.27,0-4.04.32-5.31.95-1.27.64-1.82,1.9-1.65,3.8l1.16,11.04c.3,2.79,0,5.05-.92,6.77-.91,1.72-2.29,3.04-4.15,3.95-1.86.91-4.05,1.55-6.57,1.93,2.67.4,4.93,1.05,6.77,1.95,1.85.9,3.19,2.2,4.04,3.89.85,1.7,1.12,3.97.82,6.81l-1.16,11.04c-.17,1.9.37,3.16,1.65,3.8,1.27.64,3.04.95,5.31.95v8.23c-6.88,0-11.72-1.04-14.5-3.12-2.78-2.08-3.91-5.64-3.39-10.68l1.12-10.7c.2-1.9-.12-3.38-.95-4.45-.84-1.07-2.06-1.83-3.69-2.26-1.62-.44-3.49-.65-5.61-.65v-9.58c2.1,0,3.95-.22,5.58-.65,1.62-.44,2.86-1.19,3.7-2.26.85-1.07,1.17-2.56.97-4.45l-1.12-10.63c-.55-5.14.57-8.74,3.37-10.79,2.79-2.06,7.63-3.09,14.52-3.09Z"/>
          </g>
          <g :style="lookAtMouse">
            <path class="cls-1" d="m58.25,67.38c-3.14,0-5.72,2.43-5.95,5.51h-4.51c-.24-3.08-2.81-5.51-5.95-5.51-3.3,0-5.98,2.68-5.98,5.98s2.68,5.98,5.98,5.98c2.89,0,5.31-1.06,5.86-3.79h4.7c.55,2.73,2.96,3.79,5.86,3.79,3.3,0,5.98-2.68,5.98-5.98s-2.68-5.98-5.98-5.98Z"/>
          </g>
          <path class="cls-1" d="m90.04,57.98l-5.21-7.34c6.13-4.35,8.51-12.36,5.41-18.23-2.19-4.15-7.09-6.85-12.47-6.88l-3.4-.02-.92-3.27c-.25-.88-1.7-5.4-5.97-7.45-4.14-1.99-9.49-1.02-13.3,2.42l-4,3.6-2.83-4.58c-4.41-7.14-12.82-8.75-17.91-5.79-4.03,2.35-6.29,7.59-5.63,13.05l.53,4.37-4.36.63c-.29.04-7.12,1.08-9.88,6.88-2.37,4.96-.87,11.27,3.64,15.32l-6.02,6.69C.27,50.69-2.1,40.05,1.98,31.51c3.11-6.52,8.83-9.54,12.73-10.89.29-7.57,4.05-14.35,10.19-17.93C33.58-2.38,44.92-.04,52.08,7.68c6.01-3.47,13.19-3.92,19.3-.99,5.31,2.55,8.16,6.93,9.59,10.06,7.47.96,13.9,5.17,17.22,11.46,5.25,9.95,1.75,22.74-8.16,29.77Z"/>
        </g>
      </g>
    </svg><span style="margin-left: -13px">avane</span></h1>
  <p class="text-primary-dark animate-appear delay-100">Frontend developper</p>
</div>
</template>

<script setup>
export default {
  components: {},
  name: 'HavaneLogo',
  data() {
    return {
      mousePos: {x: 0, y: 0},
      mouseOut: false,
      ismobile: false,
      mouseOutEvent: null,
      mouseMoveEvent: null
    }
  },
  mounted() {
    this.mouseMoveEvent = window.addEventListener('mousemove', (e) => {
      this.mouseOut = false;
      let x = e.clientX
      let y = e.clientY
      x -= window.innerWidth / 2
      this.mousePos = {x, y}
    })

    this.mouseOutEvent = window.addEventListener("mouseout", (e) => {

      if (e.clientY <= 0 || e.clientX <= 0 || (e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
        this.mouseOut = true;
      }
    })

    //try to detect if mobile using features detection
    if (window.screen.orientation.type !== 'landscape-primary') {
      this.isMobile = true
      this.searchForMouse()
    }
  },
  methods: {
    async searchForMouse() {
      if (!this.isMobile) {
        if (!this.mouseOut) return
      }
      let lastPos = this.mousePos
      let newPos = {x: Math.random() * window.innerWidth - window.innerWidth / 2, y: Math.random() * window.innerHeight}
      await this.moveEyesSmoothly(lastPos, newPos)
      setTimeout(() => {
        this.searchForMouse()
      }, Math.random() * 3000)
    },
    async moveEyesSmoothly(lastPos, newPos) {
      if (lastPos.x === newPos.x && lastPos.y === newPos.y) return
      let x = lastPos.x
      let y = lastPos.y
      let xDiff = newPos.x - lastPos.x
      let yDiff = newPos.y - lastPos.y
      let xStep = xDiff / 10
      let yStep = yDiff / 10
      for (let i = 0; i < 10; i++) {
        x += xStep
        y += yStep
        this.mousePos = {x, y}
        await new Promise((resolve) => setTimeout(resolve, 10))
      }
    }
  },
  watch: {
    mouseOut() {
      if (this.mouseOut) {
        this.searchForMouse()
      }
    }
  },
  computed: {
    lookAtMouse() {
      return {
        transform: `translate(${this.mousePos.x / 100}px, ${this.mousePos.y / 100}px)`
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.mouseMoveEvent)
    window.removeEventListener('mouseout', this.mouseOutEvent)
  }
}
</script>

<style scoped>

</style>
