<template>
  <div class="storybook-wrapper">
    <slot />
  </div>
</template>

<style scoped>
.storybook-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
  min-height: calc(100vh - 2rem);
}
.storybook-wrapper.no-padding {
  padding: 0;
}
</style>