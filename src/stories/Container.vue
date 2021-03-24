<template>
  <div :style="`max-width: ${width};`" class="storybook-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.storybook-container {
  width: 100%;
  box-sizing: border-box;
  border: 10px dotted var(--border);
  margin: auto;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    width: {
      type: String,
      required: false,
      default: "100vw",
    },
  },
});
</script>
