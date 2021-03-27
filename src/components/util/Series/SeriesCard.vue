<template>
  <div class="series-card" :large="large" :small="small">
    <div class="poster-wrapper">
      <poster
        :src="
          fake
            ? 'https://cover.nep.li/cover/New-Game.jpg'
            : baseUrl + data.thumbnailUrl
        "
      />
    </div>
    <div class="meta-info">
      <div class="info-core">
        <p>Chapter 15 (15%)</p>
        <h2 class="title">
          {{ fake ? "New Game!" : data.title || "No known title" }}
        </h2>
      </div>
      <div class="meta-actions">
        <small-button>
          <info-icon size="24" />
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
  height: 100%;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 20px;
  align-items: center;

  .meta-info {
    display: grid;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 5px;
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
  display: block;
  border-radius: 4px;
  overflow: hidden;
  > * + * {
    margin-top: 15px;
  }
}

// Actual stylings
.info-core > * {
  margin: 0;

  & + * {
    margin-top: 3px;
  }
}
.info-core .title {
  font-weight: bold;
  color: var(--text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
  word-break: break-word;
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
    data: {
      type: Object,
      required: true,
    },
    fake: {
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
  setup: () => {
    const baseUrl = localStorage.getItem("baseUrl");
    return {
      baseUrl,
    };
  },
});
</script>
