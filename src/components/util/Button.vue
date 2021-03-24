<template>
  <button :data-type="type">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 6px 32px;
  border: 0;
  font-size: 1rem;
  border-radius: 100px;
  cursor: pointer;

  // Primary color
  // GREEN
  background: rgb(106, 233, 106);
  color: rgb(4, 97, 4);

  &:hover {
    background: rgb(92, 204, 92);
  }

  &:active {
    background: rgb(82, 189, 82);
  }

  // Warning / negative color
  // RED
  &[data-type="red"] {
    background: rgb(255, 149, 149);
    color: darkred;
  }

  &[data-type="red"]:hover {
    background: rgb(230, 131, 131);
  }

  &[data-type="red"]:active {
    background: rgb(211, 118, 118);
  }

  // Other nested styles
  svg {
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 5px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      required: false,
      default: "",
    },
  },
});
</script>
