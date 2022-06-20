<template>
  <div class="h-screen w-screen" :class="{ 'overflow-hidden': !canShowcase }">
    <div
      class="h-screen w-screen flex flex-col justify-center items-center bg-primary-dark relative"
    >
      <Navbar class="absolute top-0" />
      <h1 class="text-3xl text-tertiary flex">
        <div v-html="chat + carret" ref="chatOutput" class="text-center snap-center"></div>
      </h1>
      <template v-if="!typing">
        <div class="flex h-20 mt-10 space-x-10">
          <div
            v-for="answer in currentAnswers"
            :key="answer.value"
            class="text-xl cursor-pointer animate-appear"
            :class="answer.classes"
            @mouseenter="
              () => {
                if (answer.id == 0 && no > 3) {
                }
              }
            "
            @click="
              () => {
                if (typing) return
                currentDialogueId = answer.value
                if (answer.action) doAction(answer.action)
                typeWriter(currentQuestion, 'chatOutput', 70)
              }
            "
          >
            {{ answer.title }}
          </div>
        </div>
      </template>
      <div v-else class="flex h-20 mt-10 w-2" />
      <div v-if="canShowcase" class="animate-appear absolute bottom-5 h-1 w-1">
        <fa icon="angle-down" class="text-tertiary animate-bounce" />
      </div>
    </div>
    <div
      class="h-screen w-screen flex flex-col justify-center items-center bg-primary-dark relative"
    >
      <Wip />
    </div>
  </div>
</template>

<script>
import Showcase from '~/components/Showcase.vue'
import Wip from '~/components/wip.vue'
import Navbar from '../components/subComps/Navbar.vue'
export default {
  components: { Navbar, Showcase, Wip },
  name: 'IndexPage',
  data() {
    return {
      showcase: false,
      currentDialogueId: 1,
      typing: false,
      chat: '',
      dialogueError: "Well done, you've got the best of me, I'm defeated...",
      no: 0,
      dialogues: [
        {
          id: 0,
          question: 'Are you <span class="text-red-500">Sure</span> ?',
          answers: [
            {
              title: 'yes',
              value: 0,
              classes: 'text-tertiary hover:text-green-500',
              action: 'no',
            },
            {
              title: 'no',
              value: 3,
              classes: 'text-tertiary hover:text-red-500',
              action: 'showcase',
            },
          ],
        },
        {
          id: 1,
          question:
            'Looking for a <span class="text-yellow-500">{</span>developer<span class="text-yellow-500">}</span> ?',
          answers: [
            {
              title: 'yes',
              value: 2,
              classes: 'text-tertiary hover:text-green-500',
              action: 'showcase',
            },
            {
              title: 'no',
              value: 0,
              classes: 'text-tertiary hover:text-red-500',
            },
          ],
        },
        {
          id: 2,
          question:
            'You\'re at the right place then, <span class="text-accent-2">I</span> can certainly help ! <br> <span class="text-accent-2">Scroll down</span> to see what I can offer.',
          answers: [],
        },
        {
          id: 3,
          question:
            'I knew you weren\'t serious !<br><span class="text-accent-2">I</span> can certainly help ! <br> <span class="text-accent-2">Scroll down</span> to see what I can offer.',
          answers: [],
        },
      ],
    }
  },
  mounted() {
    this.typeWriter(this.currentQuestion, 'chatOutput', 70)
  },
  methods: {
    async typeWriter(word, ref, delay = 100) {
      if (this.typing) return
      word = word || this.dialogueError
      this.typing = true
      let jumpType = false
      await this.delay(300)
      const elem = this.$refs[ref]
      // console.log(elem.className)
      let oldClasses = elem.className
      elem.className += ' bg-secondary'
      await this.delay(500)
      elem.className = oldClasses
      this.chat = ''
      for (let index = 0; index < word.length; index++) {
        const letter = word[index]
        if (letter == '<') jumpType = true

        this.chat += letter
        if (!jumpType) await this.delay(delay)
        if (letter == '>') jumpType = false
      }
      this.typing = false
    },
    progress() {},
    delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time))
    },
    doAction(action) {
      if (action == 'no') this.no += 1
      if (action == 'resetNo') this.no = 0
      if (action == 'showcase') this.showcase = true
    },
  },
  computed: {
    currentQuestion() {
      let question
      this.dialogues.forEach((dialogue) => {
        if (dialogue.id == this.currentDialogueId) {
          // console.log('Current dialogue: ', dialogue)
          question = dialogue.question
          if (dialogue.id == 0) {
            question = question.replace('you <', 'you' + this.really + ' <')
          }
        }
      })
      return question
    },
    currentAnswers() {
      let answers
      this.dialogues.forEach((dialogue) => {
        if (dialogue.id == this.currentDialogueId) {
          answers = dialogue.answers
        }
      })
      return answers
    },
    choices() {
      let answers = []
      return answers
    },
    carret() {
      if (this.typing)
        return '<div class="ml-1 h-8 w-[2px] inline-block bg-tertiary">'
      return '<div class="ml-1 h-8 w-[2px] inline-block bg-tertiary animate-blink">'
    },
    really() {
      let really = ''
      for (let index = 0; index < this.no; index++) {
        really += ' really'
      }
      return really
    },
    canShowcase() {
      return true //this.showcase && !this.typing
    },
  },
}
</script>
