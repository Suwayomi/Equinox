<template>
  <div class="series-list">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '../../../index' as v;

.series-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 40px 20px;
}

@media (max-width: v.$breakpoint) {
  .series-list {
    grid-template-columns: 100%;
    grid-gap: 20px;
  }
}
</style>
