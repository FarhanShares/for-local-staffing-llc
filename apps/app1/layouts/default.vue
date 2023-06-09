<template>
  <div class="bg-image">
    <div
      class="flex justify-center items-center w-screen h-screen py-8 md:py-16"
    >
      <div
        class="relative w-full h-full flex flex-col max-w-5xl rounded-2xl shadow-lg text-white bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg"
      >
        <PageHeader />
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.bg-image {
  background-image: url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
