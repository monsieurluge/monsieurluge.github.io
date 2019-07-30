Vue.component('Levels', {
  template: `
  <div class="levels">
    <LevelsSelectors v-bind="totals" @selected="filterLevels" />

    <LevelCard v-for="level in levels" :key="level.id" v-bind="level" />
  </div>
  `,
  data () {
    return {
      totals: {
        total: 34,
        favs: 5,
        mine: 2,
        todo: 8
      }
    }
  },
  props: {
    levels: { type: Array, required: true }
  },
  methods: {
    filterLevels (filter) {
      console.log('FIXME: filter by', filter)
    }
  }
})
