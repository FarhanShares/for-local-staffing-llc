<script setup lang="ts">
useHead({
  title: 'Frontend Focused Full-Stack Developer - Farhan Israq',
  meta: [
    {
      name: 'description',
      content: `Farhan is a versatile individual, skilled in veterinary science, programming, and frontend development. They excel in full-stack development, with expertise in REST API, DevOps, testing, and Vue.js for frontend development. Their preferred backend framework is Laravel, and they enjoy working with Express.js in Node.js. Farhan's passion for learning drives them to explore new technologies and make a meaningful impact in both fields.`,
    },
  ],
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen w-screen">
    <h1 class="text-5xl font-bold animate__animated animate__flash">
      {{ $hello('from App 2') }}
    </h1>
    <div class="text-center text-lg">
      <br />
      This is just yet another micro-app which I just wanted to add to the
      monorepo.
      <br />
      We can scale easily. Not too bad!
    </div>

    <farhans-button class="mt-10"> Get Back to App 1 </farhans-button>
  </div>
</template>
