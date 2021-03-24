<template>
  <div class="series-card" :large="large" :small="small">
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
@use '../../../index' as v;

// Layout
.series-card {
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

  .meta-actions {
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    grid-gap: 5px;
  }
}

// Desktop / tablet layout
@mixin large {
  grid-template-columns: 100%;
  grid-gap: 5px;
  border-radius: 4px;
  overflow: hidden;
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

.series-card[large="true"] {
  @include large;
}

@media (min-width: v.$breakpoint + 1) {
  .series-card[small="false"] {
    @include large;
  }
}
</style>

<script lang="ts">
// Import Vue stuff
import { defineComponent } from "vue";

// Import components
import Poster from "../Images/Poster.vue";
import SmallButton from "../Buttons/SmallButton.vue";

// Import icons
import { InfoIcon, BookOpenIcon } from "@zhuowenli/vue-feather-icons";

export default defineComponent({
  props: {
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
    large: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    Poster,
    SmallButton,
    InfoIcon,
    BookOpenIcon,
  },
  setup: () => {},
});
</script>
