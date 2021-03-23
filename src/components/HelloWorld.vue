<template>
  <main>
    <section>
      <h1 class="do-center">The count is: {{ count }}</h1>
    </section>
    <div class="do-center do-x-spacing">
      <Button @click="count--" type="red">
        <min-circle-icon />
        Decrease count
      </Button>
      <Button @click="count++">
        <plus-circle-icon />
        Increase count
      </Button>
    </div>

    <hr />

    <section>
      <h1 class="do-center">The Vuex count is: {{ storeCount }}</h1>
    </section>
    <div class="do-center do-x-spacing">
      <Button @click="decrease" type="red">
        <min-circle-icon />
        Decrease Vuex count
      </Button>
      <Button @click="increase">
        <plus-circle-icon />
        Increase Vuex count
      </Button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.do-center {
  text-align: center;
}
.do-x-spacing > * {
  margin: 10px;
}
hr {
  margin: 80px 0;
}
</style>

<script lang="ts">
// Import Vue stuff
import { ref, defineComponent } from "vue";

// Import components
import Button from "~/components/util/Button.vue";

// Import icons
import PlusCircleIcon from "@icons/plus-circle.svg";
import MinCircleIcon from "@icons/min-circle.svg";

export default defineComponent({
  components: {
    Button,
    PlusCircleIcon,
    MinCircleIcon,
  },
  setup: () => {
    const count = ref(0);
    return {
      count,
    };
  },
  methods: {
    increase() {
      this.$store.commit("increment");
    },
    decrease() {
      this.$store.commit("decrease");
    },
  },
  computed: {
    storeCount(): number {
      return this.$store.state.count;
    },
  },
});
</script>
