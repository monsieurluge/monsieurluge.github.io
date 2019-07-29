Vue.component('Levels', {
  template: `
  <div class="levels">
    <LevelsFilters />

    <LevelCard v-for="level in levels" :key="level.id" v-bind="level" />
  </div>
  `,
  props: {
    levels: { type: Array, required: true }
  }
})
