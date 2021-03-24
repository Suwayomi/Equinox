<template>
  <div class="manga-card">
    <div class="poster-wrapper">
      <poster src="https://cover.nep.li/cover/Dr-Stone.jpg" />
    </div>
    <div class="meta-info">
      <div class="info-core">
        <p>Z= 160 (23%)</p>
        <h2 class="title">Dr. Stone</h2>
      </div>
      <div class="meta-actions">
        <small-button>
          <info-icon size="24" />
        </small-button>
        <small-button>
          <book-open-icon size="24" />
        </small-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Layout
.manga-card {
  width: 100%;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 20px;
  align-items: center;

  .meta-info {
    display: grid;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
  }

  .meta-actions > * {
    display: flex;
    margin: 5px 0;
  }
}

// Actual stylings
.info-core > * {
  margin: 0;

  & + * {
    margin-top: 10px;
  }
}
.info-core .title {
  font-weight: bold;
  color: var(--text);
}
.small-button {
  color: var(--text-secondary);
}
</style>

<script lang="ts">
// Import Vue stuff
import { defineComponent } from "vue";

// Import components
import Poster from "../Poster.vue";
import SmallButton from "../Buttons/SmallButton.vue";

// Import icons
import { InfoIcon, BookOpenIcon } from "@zhuowenli/vue-feather-icons";

console.log(InfoIcon);
export default defineComponent({
  components: {
    Poster,
    SmallButton,
    InfoIcon,
    BookOpenIcon,
  },
  setup: () => {},
});
</script>
