<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative z-10 py-6 border-b border-orange-400">
    <nav class="px-14">
      <div class="flex justify-between items-center">
        <div class="flex flex-col gap-6">
          <PageName />
          <PageSocialLinks />
        </div>

        <img
          class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 md:static md:w-40 md:h-40 p-1 transform -rotate-1 bg-gray-300 rounded-full shadow-lg"
          src="/farhan-israq-portrait.jpeg"
          alt="Farhan Israq"
        />
      </div>
    </nav>
  </div>
</template>
