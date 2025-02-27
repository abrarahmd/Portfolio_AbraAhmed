<script setup lang="ts">
const { $prepareMeta, $applyMediumZoom } = useNuxtApp()

interface Button {
  text: string
  link: string
  icon: string
}

interface Project {
  client?: string
  note?: string
  name: string
  description: string
  image?: string
  buttons?: Button[]
}

const title = "Projects"
const description = "Take a look at my works and envision the possibilities!"

useHead({
  title,
  meta: $prepareMeta({
    title,
    description,
  }),
})

const projects = ref<Project[]>([
  {
    client: "Brac University",
    name: "Categorising Sentiments of Pandemic Tweets - NLP",
    description:
      "This project involves categorizing sentiments of pandemic-related tweets using Natural Language Processing (NLP) techniques to analyze public emotions and opinions during the crisis.",
    image: "/assets/images/projects/prtnlp.jpg",
    buttons: [
      {
        text: "Source Code",
        link: "https://github.com/abrarahmd/Categorising_Sentiments_of_Pandemic_Tweet-NLP",
        icon: "mdi:github",
      },
    ],
  },
  {
    client: "Brac University",
    name: "American Sign Language Detection - CNN",
    description:
      "This project utilizes Convolutional Neural Networks (CNN) to detect and recognize American Sign Language (ASL) gestures for effective communication.",
    image: "/assets/images/projects/asld.jpg",
    buttons: [
      {
        text: "Source Code",
        link: "https://github.com/abrarahmd/American_Sign_Language_Detection-ML",
        icon: "mdi:github",
      },
    ],
  },
  {
    client: "Brac University",
    name: "GoNuts",
    description: "GoNuts is a ticket management system for concerts built using ExpressJS, HBS, and CSS for a seamless user experience.",
    image: "/assets/images/projects/gonuts.jpg",
    buttons: [
      {
        text: "Source Code",
        link: "https://github.com/abrarahmd/GoNuts",
        icon: "mdi:github",
      },
    ],
  },
  {
    client: "Brac University",
    name: "TicTacToe - Assembly Language",
    description:
      "Welcome to the Tic Tac Toe Game, a classic 3x3 grid battle between two players, built from the ground up using 8086 Assembly Language. This project showcases the elegance of low-level programming with a nostalgic gaming twist.",
    image: "/assets/images/projects/tictactoe.jpg",
    buttons: [
      {
        text: "Source Code",
        link: "https://github.com/abrarahmd/TicTacToe-Assembly_Language",
        icon: "mdi:github",
      },
    ],
  },
  {
    client: "Brac University",
    name: "Email Spam Detection - ML",
    description:
      "This project utilizes Machine Learning to classify emails as spam or not, enhancing email filtering and security.",
    image: "/assets/images/projects/esdml.jpg",
    buttons: [
      {
        text: "Source Code",
        link: "https://github.com/abrarahmd/Email_Spam_Detection-ML",
        icon: "mdi:github",
      },
    ],
  },
  {
    client: "Brac University",
    name: "CampusConnect",
    description:
      "CampusConnect is designed to streamline campus services and enhance the overall student experience through convenient access to essential resources.",
    image: "/assets/images/projects/campusconnect.jpg",
    buttons: [
      {
        text: "Source Code",
        link: "https://github.com/abrarahmd/CampusConnect",
        icon: "mdi:github",
      },
    ],
  },
  {
    client: "BRAC University",
    name: "Catch the Diamond",
    description:
      "Welcome to Diamond Catcher, a thrilling game coded in Python using the OpenGL library, where your reflexes are put to the test as you catch falling diamonds and aim for a high score!",
    image: "/assets/images/projects/catchthediamond.jpg",
    buttons: [
      {
        text: "Source Code",
        link: "https://github.com/abrarahmd/CatchTheDiamond",
        icon: "mdi:github",
      },
    ],
  },
  {
    client: "Brac University",
    name: "Jurassic Jump",
    description:
      "This simple dinosaur jump game, inspired by the offline Google Dino Jump, is implemented using the OpenGL library for an engaging gaming experience.",
    image: "/assets/images/projects/jurassicjump.png",
    buttons: [
      {
        text: "Source Code",
        link: "https://github.com/abrarahmd/Jurassic-Jump",
        icon: "mdi:github",
      },
    ],
  },
])

onMounted(() => {
  $applyMediumZoom()
})
</script>

<template>
  <PageLayout
    title="My Projects"
    description="Check out the projects I worked on!"
  >
    <section class="flex items-center flex-wrap gap-2">
      <span class="text-sm">Jump to:</span>
      <Button
        v-for="(project, index) in projects"
        :key="`skipto-button-${index}`"
        :href="`#${project.name.toLowerCase().split(' ').join('-')}`"
      >
        {{ project.name }}
      </Button>
    </section>

    <section
      v-for="(project, index) in projects"
      :key="`project-${index}`"
      :id="project.name.toLowerCase().split(' ').join('-')"
      class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
      :class="index === 0 ? 'mt-24 mb-40' : 'my-40'"
    >
      <div class="space-y-4">
        <span
          v-if="project.client"
          class="bg-blue-600/10 block w-max text-sm rounded-lg px-4 text-blue-600 py-1.5 dark:bg-white/5 dark:text-white/30"
        >
          {{ project.client }}
        </span>

        <span
          v-if="project.note"
          class="bg-orange-600/10 block w-max text-sm rounded-lg px-4 text-orange-600 py-1.5 dark:bg-white/5 dark:text-white/30"
        >
          {{ project.note }}
        </span>

        <h2 class="text-4xl text-black/90 font-bold dark:text-white/90">
          {{ project.name }}
        </h2>

        <p>
          {{ project.description }}
        </p>

        <div v-if="project.buttons" class="flex flex-wrap gap-2">
          <Button
            v-for="(button, index) in project.buttons"
            :key="`button-${index}`"
            :href="button.link"
            :blank="!button.link.startsWith('/')"
          >
            <template #icon>
              <Icon v-if="button.icon" :name="button.icon" class="h-5 w-5" />
            </template>

            {{ button.text }}
          </Button>
        </div>
      </div>

      <SmartFigure
        v-if="project.image"
        :src="project.image"
        border
        :class="{ 'md:order-first': index % 2 === 0 }"
      />
    </section>
  </PageLayout>
</template>
