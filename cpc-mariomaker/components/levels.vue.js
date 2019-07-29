Vue.component('Levels', {
  template: `
  <div>
      <level-card v-for="level in levels" :key="level.id" v-bind="level"></level-card>
  </div>
  `,
  props: {
    levels: { type: Array, required: true }
  }
})
