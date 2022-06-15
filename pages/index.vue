<template>
  <div
    class="h-screen w-screen flex flex-col justify-center items-center bg-primary-dark relative"
  >
    <Navbar class="absolute top-0" />

    <h1 class="text-3xl text-tertiary flex">
      <div v-html="chat + carret" ref="chatOutput" class="text-center"></div>
    </h1>
    <template v-if="!typing">
      <div class="flex h-20 mt-10 space-x-10">
        <div
          v-for="answer in currentAnswers"
          :key="answer.value"
          class="text-xl cursor-pointer"
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
              typeWriter(currentQuestion, 'chatOutput')
            }
          "
        >
          {{ answer.title }}
        </div>
      </div>
    </template>
    <div v-else class="flex h-20 mt-10 w-2" />
  </div>
</template>

<script>
import Navbar from '../components/subComps/Navbar.vue'
export default {
  components: { Navbar },
  name: 'IndexPage',
  data() {
    return {
      currentDialogueId: 1,
      typing: false,
      chat: '',
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
              value: 2,
              classes: 'text-tertiary hover:text-red-500',
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
            },
            {
              title: 'no',
              value: 0,
              classes: 'text-tertiary hover:text-red-500',
            },
          ],
        },
      ],
    }
  },
  mounted() {
    this.typeWriter(this.currentQuestion, 'chatOutput', 100)
  },
  methods: {
    async typeWriter(word, ref, delay = 100) {
      if (this.typing) return
      word = word || "Well done, you've got the best of me, I'm defeated..."
      this.typing = true
      let jumpType = false
      await this.delay(300)
      const elem = this.$refs[ref]
      console.log(elem.className)
      let oldClasses = elem.className
      elem.className += ' bg-accent-2'
      await this.delay(500)
      elem.className = oldClasses
      this.chat = ''
      for (let index = 0; index < word.length; index++) {
        const letter = word[index]
        if (letter == '<') jumpType = true
        if (letter == '>') jumpType = false

        this.chat += letter
        if (!jumpType) await this.delay(delay)
      }
      this.typing = false
    },
    progress() {},
    delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time))
    },
    doAction(action) {
      if (action == 'no') this.no += 1
    },
  },
  computed: {
    currentQuestion() {
      let question
      this.dialogues.forEach((dialogue) => {
        if (dialogue.id == this.currentDialogueId) {
          console.log('Current dialogue: ', dialogue)
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
  },
}
</script>
