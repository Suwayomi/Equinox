<template>
  <aside class="sidebar">
    <router-link to="/" class="brand-link">
      <section class="brand">
        <align-center-icon size="36" />
        <h1>Equinox</h1>
      </section>
    </router-link>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  box-sizing: border-box;
  padding: 20px;
  width: 350px;
  height: 100vh;
  background: var(--body-offset);
  position: sticky;
  top: 0;
}

.brand-link {
  text-decoration: none;
  color: var(--text-harsh);

  &:hover {
    text-decoration: underline;
  }
}
.brand {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  align-items: center;
  font-size: 1.5rem;

  svg {
    color: var(--theme);
  }
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent } from "vue";

// Import icons
import { AlignCenterIcon } from "@zhuowenli/vue-feather-icons";

export default defineComponent({
  components: {
    AlignCenterIcon,
  },
});
</script>