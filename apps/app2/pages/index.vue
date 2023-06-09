<template>
  <div class="flex flex-col items-center justify-center h-screen w-screen">
    <h1 class="text-5xl font-bold animate__animated animate__flash">
      {{ $hello('from App 2') }}
    </h1>
    <div class="text-center">
      <br />
      This is just yet another micro-app which I just wanted to add to the
      monorepo.
      <br />
      We can scale easily. Not too bad!
    </div>

    <farhans-button class="mt-10"> Get Back to App 1 </farhans-button>
  </div>
</template>
