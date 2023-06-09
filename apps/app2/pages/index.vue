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

      <br />
      <br />

      <ul class="text-base">
        <li>These apps are all running in the docker containers</li>
        <li>I've used NGINX to do the reverse proxies</li>
        <li>
          This could have been an auth service (e.g.
          auth-localstaffing-llc.farhanshares.com)
        </li>
        <li>
          I would have love to demonstrate more (e.g. an auth api service)
          however due to limited time, this is what I was able to do so far.
        </li>
      </ul>
    </div>

    <nuxt-link href="https://for-localstaffing-llc.farhanshares.com">
      <farhans-button class="mt-10"> Get Back to App 1 </farhans-button>
    </nuxt-link>
  </div>
</template>
