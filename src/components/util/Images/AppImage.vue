<template>
  <div class="image">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: false,
      default: "",
    },
  },
  setup: () => {},
});
</script>